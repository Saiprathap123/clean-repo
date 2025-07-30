import nodemailer from "nodemailer";

import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertBookingSchema } from "@shared/schema";
import { getServiceRecommendations, analyzeBusinessNeeds } from "./ai-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // Debug environment variables
  console.log("🔍 SMTP Configuration Debug:");
  console.log("BREVO_USER:", process.env.BREVO_USER);
  console.log("BREVO_PASS:", process.env.BREVO_PASS?.substring(0, 8) + "...");
  console.log("Full BREVO_USER length:", process.env.BREVO_USER?.length);
  console.log("Full BREVO_PASS length:", process.env.BREVO_PASS?.length);
  
  // SMTP Configuration for Brevo with environment variables - trim whitespace
  const brevoUser = process.env.BREVO_USER?.trim();
  const brevoPass = process.env.BREVO_PASS?.trim();
  
  console.log("Trimmed BREVO_USER:", brevoUser);
  console.log("Trimmed BREVO_PASS:", brevoPass?.substring(0, 8) + "...");
  
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: brevoUser,
      pass: brevoPass,
    }
  });

  // Optional: verify connection at app startup for easier debugging
  transporter.verify(function (error, success) {
    if (error) {
      console.error("❌ Brevo SMTP connection failed:", error);
      console.log("🔧 Note: Booking system will still work, email delivery requires domain verification in Brevo dashboard");
    } else {
      console.log("✅ Brevo SMTP server is ready to send messages");
    }
  });

  app.post("/api/book-consultation", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);

      const meetLink = `https://meet.jit.si/${Math.random().toString(36).substring(2, 10)}`;

      console.log("📅 NEW CONSULTATION BOOKING:");
      console.log("════════════════════════════════════");
      console.log(`👤 Name: ${bookingData.fullName}`);
      console.log(`📧 Email: ${bookingData.email}`);
      console.log(`📱 Phone: ${bookingData.phone}`);
      console.log(`🏢 Service: ${bookingData.service}`);
      console.log(`📅 Date: ${bookingData.preferredDate}`);
      console.log(`⏰ Time: ${bookingData.preferredTime}`);
      console.log(`💬 Message: ${bookingData.message || 'No message provided'}`);
      console.log(`🔗 Meeting Link: ${meetLink}`);
      console.log("════════════════════════════════════");

      const mailOptionsUser = {
        from: "Recruitment@dynish.com",
        to: bookingData.email,
        subject: "Appointment Confirmation - Your 20-Minute Free Consultation",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #5b91e1;">Hi ${bookingData.fullName}, your appointment is confirmed!</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">📅 Consultation Details:</h3>
              <p><strong>Service:</strong> ${bookingData.service}</p>
              <p><strong>Date:</strong> ${bookingData.preferredDate}</p>
              <p><strong>Time:</strong> ${bookingData.preferredTime}</p>
              <p><strong>Duration:</strong> 20-minute free consultation</p>
              ${bookingData.message ? `<p><strong>Your message:</strong> ${bookingData.message}</p>` : ''}
            </div>
            
            <div style="background-color: #5b91e1; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">🔗 Meeting Link</h3>
              <a href="${meetLink}" style="color: white; text-decoration: none; font-weight: bold;">${meetLink}</a>
              <p style="margin: 10px 0 0 0; font-size: 14px;">Click the link above to join your consultation at the scheduled time</p>
            </div>
            
            <p style="color: #666;">Thank you for choosing Register A Startup CA! We look forward to helping you with your business needs.</p>
            
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; color: #888; font-size: 12px;">
              <p>For any questions, please reply to this email or contact us directly.</p>
            </div>
          </div>
        `,
      };

      const mailOptionsAdmin = {
        from: "Recruitment@dynish.com",
        to: "pottipatisaiprathap1234@gmail.com",
        subject: "🔔 New 20-Minute Free Consultation Booking",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d32f2f; background-color: #ffebee; padding: 15px; border-radius: 8px;">🔔 New Appointment Booked</h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">👤 Client Information:</h3>
              <p><strong>Name:</strong> ${bookingData.fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${bookingData.email}">${bookingData.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${bookingData.phone}">${bookingData.phone}</a></p>
            </div>
            
            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1976d2; margin-top: 0;">📋 Consultation Details:</h3>
              <p><strong>Service:</strong> ${bookingData.service}</p>
              <p><strong>Date:</strong> ${bookingData.preferredDate}</p>
              <p><strong>Time:</strong> ${bookingData.preferredTime}</p>
              <p><strong>Duration:</strong> <span style="color: #d32f2f; font-weight: bold;">20-minute free consultation</span></p>
              ${bookingData.message ? `<p><strong>Client Message:</strong> ${bookingData.message}</p>` : '<p><em>No message provided</em></p>'}
            </div>
            
            <div style="background-color: #4caf50; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">🔗 Meeting Link (Ready to Use)</h3>
              <a href="${meetLink}" style="color: white; text-decoration: none; font-weight: bold; background-color: #388e3c; padding: 10px 20px; border-radius: 5px; display: inline-block;">${meetLink}</a>
            </div>
            
            <div style="border: 2px solid #ff9800; background-color: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #f57c00;"><strong>⚠️ Reminder:</strong> This is a 20-minute free consultation. Please prepare accordingly.</p>
            </div>
          </div>
        `,
      };

      // Send emails
      try {
        console.log("📧 Sending emails...");
        console.log("📧 User email to:", bookingData.email);
        console.log("📧 Admin email to: pottipatisaiprathap1234@gmail.com");
        console.log("📧 From address: Recruitment@dynish.com");
        
        const userInfo = await transporter.sendMail(mailOptionsUser);
        const adminInfo = await transporter.sendMail(mailOptionsAdmin);
        
        console.log("✅ User email sent successfully! Message ID:", userInfo.messageId);
        console.log("✅ Admin email sent successfully! Message ID:", adminInfo.messageId);
        console.log("✅ Email delivery complete for booking:", bookingData.fullName);
      } catch (mailError) {
        console.error("❌ Failed to send notification emails:", mailError);
        console.error("❌ Email error details:", {
          code: (mailError as any).code,
          response: (mailError as any).response,
          responseCode: (mailError as any).responseCode
        });
      }

      res.json({
        success: true,
        message: "Consultation booked successfully! We'll contact you soon.",
        meetLink,
        details: {
          name: bookingData.fullName,
          service: bookingData.service,
          date: bookingData.preferredDate,
          time: bookingData.preferredTime,
          meetLink: meetLink,
        },
      });

    } catch (error) {
      console.error("❌ Booking error:", error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid booking data",
          errors: error.errors,
        });
      }

      res.status(500).json({
        message: "Failed to book consultation. Please try again.",
      });
    }
  });

  // AI Service Recommendation API
  app.post("/api/ai-recommendations", async (req, res) => {
    try {
      const { businessType, businessStage, currentChallenges, timeframe, budget, specificNeeds } = req.body;

      if (!businessType || !businessStage || !currentChallenges) {
        return res.status(400).json({
          message: "Missing required fields: businessType, businessStage, and currentChallenges are required",
        });
      }

      console.log("🤖 AI RECOMMENDATION REQUEST:");
      console.log("═══════════════════════════════");
      console.log(`🏢 Business Type: ${businessType}`);
      console.log(`📊 Business Stage: ${businessStage}`);
      console.log(`🎯 Challenges: ${currentChallenges}`);
      console.log(`⏰ Timeframe: ${timeframe || 'Not specified'}`);
      console.log(`💰 Budget: ${budget || 'Not specified'}`);
      console.log("═══════════════════════════════");

      const recommendations = await getServiceRecommendations({
        businessType,
        businessStage,
        currentChallenges,
        timeframe: timeframe || "flexible",
        budget: budget || "flexible",
        specificNeeds,
      });

      console.log(`✅ Generated ${recommendations.recommendations.length} recommendations`);

      res.json(recommendations);
    } catch (error) {
      console.error("❌ AI Recommendation Error:", error);
      res.status(500).json({
        message: "Failed to generate AI recommendations. Please try again.",
      });
    }
  });

  // Business Analysis API
  app.post("/api/analyze-business", async (req, res) => {
    try {
      const { description } = req.body;

      if (!description || description.trim().length < 10) {
        return res.status(400).json({
          message: "Please provide a meaningful business description (at least 10 characters)",
        });
      }

      console.log("🔍 BUSINESS ANALYSIS REQUEST:");
      console.log("════════════════════════════");
      console.log(`📝 Description: ${description.substring(0, 100)}...`);
      console.log("════════════════════════════");

      const analysis = await analyzeBusinessNeeds(description);

      console.log(`✅ Business analyzed: ${analysis.businessType} - ${analysis.suggestedStage}`);

      res.json(analysis);
    } catch (error) {
      console.error("❌ Business Analysis Error:", error);
      res.status(500).json({
        message: "Failed to analyze business description. Please try again.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
