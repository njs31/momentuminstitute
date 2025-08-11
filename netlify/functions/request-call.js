// Netlify function for handling contact form submissions
// This replaces the API endpoint and works with Netlify's serverless architecture

// In-memory storage for demo purposes (replace with actual database in production)
let submissions = [
  {
    id: "1",
    name: "Archi Raj",
    phone: "9876543210",
    preferred_time: "evening",
    message:
      "Interested in NEET preparation course. Would like to know more about the curriculum and fee structure.",
    submitted_at: "2024-01-15T14:30:00Z",
    status: "new",
  },
  {
    id: "2",
    name: "Rahul Kumar",
    phone: "8765432109",
    preferred_time: "morning",
    message:
      "Looking for JEE coaching for Class 11. Please provide details about batch timings.",
    submitted_at: "2024-01-14T10:15:00Z",
    status: "contacted",
  },
  {
    id: "3",
    name: "Priya Sharma",
    phone: "7654321098",
    preferred_time: "afternoon",
    message:
      "Interested in Class 8-10 foundation course. Need information about subjects covered.",
    submitted_at: "2024-01-13T16:45:00Z",
    status: "enrolled",
  },
  {
    id: "4",
    name: "Amit Patel",
    phone: "6543210987",
    preferred_time: "anytime",
    message:
      "Want to know about NEET crash course. Is it suitable for Class 12 students?",
    submitted_at: "2024-01-12T09:20:00Z",
    status: "not_interested",
  },
  {
    id: "5",
    name: "Neha Singh",
    phone: "5432109876",
    preferred_time: "evening",
    message:
      "Looking for comprehensive JEE preparation. Need guidance on study materials and practice tests.",
    submitted_at: "2024-01-11T18:30:00Z",
    status: "new",
  },
];

let nextId = 6;

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    // GET request to retrieve all submissions (for admin dashboard)
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "success",
          data: submissions,
          count: submissions.length,
        }),
      };
    }

    // POST request to create new submission
    if (event.httpMethod === "POST") {
      const body = JSON.parse(event.body || "{}");
      const { name, phone, preferred_time, message } = body;

      // Basic validation
      if (!name || !phone) {
        return {
          statusCode: 400,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error: "Name and phone are required fields",
          }),
        };
      }

      // Validate phone number (10 digits)
      if (!/^[0-9]{10}$/.test(phone)) {
        return {
          statusCode: 400,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error: "Please provide a valid 10-digit phone number",
          }),
        };
      }

      // Create new submission
      const newSubmission = {
        id: nextId.toString(),
        name: name.trim(),
        phone: phone.trim(),
        preferred_time: preferred_time || "anytime",
        message: message || "",
        submitted_at: new Date().toISOString(),
        status: "new",
      };

      // Add to submissions array
      submissions.unshift(newSubmission); // Add to beginning
      nextId++;

      // Log the request (in production, save to database or send email)
      console.log("New callback request:", newSubmission);

      // Here you would typically:
      // 1. Save to database (e.g., Supabase, MongoDB)
      // 2. Send notification email (e.g., using SendGrid, Nodemailer)
      // 3. Send SMS notification
      // 4. Add to CRM system

      // Return success response with the new submission
      return {
        statusCode: 201,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "success",
          message: "Request received. We will call you shortly.",
          data: newSubmission,
        }),
      };
    }

    // PUT request to update submission status
    if (event.httpMethod === "PUT") {
      const body = JSON.parse(event.body || "{}");
      const { id, status } = body;

      if (!id || !status) {
        return {
          statusCode: 400,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error: "ID and status are required fields",
          }),
        };
      }

      // Validate status
      const validStatuses = ["new", "contacted", "enrolled", "not_interested"];
      if (!validStatuses.includes(status)) {
        return {
          statusCode: 400,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error:
              "Invalid status. Must be one of: new, contacted, enrolled, not_interested",
          }),
        };
      }

      // Find and update submission
      const submissionIndex = submissions.findIndex((sub) => sub.id === id);
      if (submissionIndex === -1) {
        return {
          statusCode: 404,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error: "Submission not found",
          }),
        };
      }

      submissions[submissionIndex].status = status;

      return {
        statusCode: 200,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "success",
          message: "Submission status updated successfully.",
          data: submissions[submissionIndex],
        }),
      };
    }

    // DELETE request to remove submission
    if (event.httpMethod === "DELETE") {
      const { id } = event.queryStringParameters || {};

      if (!id) {
        return {
          statusCode: 400,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error: "ID is required",
          }),
        };
      }

      // Find and remove submission
      const submissionIndex = submissions.findIndex((sub) => sub.id === id);
      if (submissionIndex === -1) {
        return {
          statusCode: 404,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error: "Submission not found",
          }),
        };
      }

      const deletedSubmission = submissions.splice(submissionIndex, 1)[0];

      return {
        statusCode: 200,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "success",
          message: "Submission deleted successfully.",
          data: deletedSubmission,
        }),
      };
    }

    // Method not allowed
    return {
      statusCode: 405,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      statusCode: 500,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Internal server error. Please try again.",
      }),
    };
  }
};
