// Enhanced API endpoint for handling contact form submissions
// This is a serverless function that can be deployed to Vercel, Netlify, or similar platforms

// In-memory storage for demo purposes (replace with actual database in production)
let submissions = [
  {
    id: '1',
    name: 'Archi Raj',
    phone: '9876543210',
    preferred_time: 'evening',
    message: 'Interested in NEET preparation course. Would like to know more about the curriculum and fee structure.',
    submitted_at: '2024-01-15T14:30:00Z',
    status: 'new'
  },
  {
    id: '2',
    name: 'Rahul Kumar',
    phone: '8765432109',
    preferred_time: 'morning',
    message: 'Looking for JEE coaching for Class 11. Please provide details about batch timings.',
    submitted_at: '2024-01-14T10:15:00Z',
    status: 'contacted'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    phone: '7654321098',
    preferred_time: 'afternoon',
    message: 'Interested in Class 8-10 foundation course. Need information about subjects covered.',
    submitted_at: '2024-01-13T16:45:00Z',
    status: 'enrolled'
  },
  {
    id: '4',
    name: 'Amit Patel',
    phone: '6543210987',
    preferred_time: 'anytime',
    message: 'Want to know about NEET crash course. Is it suitable for Class 12 students?',
    submitted_at: '2024-01-12T09:20:00Z',
    status: 'not_interested'
  },
  {
    id: '5',
    name: 'Neha Singh',
    phone: '5432109876',
    preferred_time: 'evening',
    message: 'Looking for comprehensive JEE preparation. Need guidance on study materials and practice tests.',
    submitted_at: '2024-01-11T18:30:00Z',
    status: 'new'
  }
];

let nextId = 6;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // GET request to retrieve all submissions (for admin dashboard)
  if (req.method === 'GET') {
    try {
      res.status(200).json({
        status: 'success',
        data: submissions,
        count: submissions.length
      });
    } catch (error) {
      console.error('Error retrieving submissions:', error);
      res.status(500).json({ 
        error: 'Internal server error. Please try again.' 
      });
    }
    return;
  }

  // POST request to create new submission
  if (req.method === 'POST') {
    try {
      const { name, phone, preferred_time, message } = req.body;

      // Basic validation
      if (!name || !phone) {
        res.status(400).json({ 
          error: 'Name and phone are required fields' 
        });
        return;
      }

      // Validate phone number (10 digits)
      if (!/^[0-9]{10}$/.test(phone)) {
        res.status(400).json({ 
          error: 'Please provide a valid 10-digit phone number' 
        });
        return;
      }

      // Create new submission
      const newSubmission = {
        id: nextId.toString(),
        name: name.trim(),
        phone: phone.trim(),
        preferred_time: preferred_time || 'anytime',
        message: message || '',
        submitted_at: new Date().toISOString(),
        status: 'new'
      };

      // Add to submissions array
      submissions.unshift(newSubmission); // Add to beginning
      nextId++;

      // Log the request (in production, save to database or send email)
      console.log('New callback request:', newSubmission);

      // Here you would typically:
      // 1. Save to database (e.g., Supabase, MongoDB)
      // 2. Send notification email (e.g., using SendGrid, Nodemailer)
      // 3. Send SMS notification
      // 4. Add to CRM system

      // Return success response with the new submission
      res.status(201).json({
        status: 'success',
        message: 'Request received. We will call you shortly.',
        data: newSubmission
      });

    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ 
        error: 'Internal server error. Please try again.' 
      });
    }
    return;
  }

  // PUT request to update submission status
  if (req.method === 'PUT') {
    try {
      const { id, status } = req.body;

      if (!id || !status) {
        res.status(400).json({ 
          error: 'ID and status are required fields' 
        });
        return;
      }

      // Validate status
      const validStatuses = ['new', 'contacted', 'enrolled', 'not_interested'];
      if (!validStatuses.includes(status)) {
        res.status(400).json({ 
          error: 'Invalid status. Must be one of: new, contacted, enrolled, not_interested' 
        });
        return;
      }

      // Find and update submission
      const submissionIndex = submissions.findIndex(sub => sub.id === id);
      if (submissionIndex === -1) {
        res.status(404).json({ 
          error: 'Submission not found' 
        });
        return;
      }

      submissions[submissionIndex].status = status;

      res.status(200).json({
        status: 'success',
        message: 'Submission status updated successfully.',
        data: submissions[submissionIndex]
      });

    } catch (error) {
      console.error('Error updating submission:', error);
      res.status(500).json({ 
        error: 'Internal server error. Please try again.' 
      });
    }
    return;
  }

  // DELETE request to remove submission
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id) {
        res.status(400).json({ 
          error: 'ID is required' 
        });
        return;
      }

      // Find and remove submission
      const submissionIndex = submissions.findIndex(sub => sub.id === id);
      if (submissionIndex === -1) {
        res.status(404).json({ 
          error: 'Submission not found' 
        });
        return;
      }

      const deletedSubmission = submissions.splice(submissionIndex, 1)[0];

      res.status(200).json({
        status: 'success',
        message: 'Submission deleted successfully.',
        data: deletedSubmission
      });

    } catch (error) {
      console.error('Error deleting submission:', error);
      res.status(500).json({ 
        error: 'Internal server error. Please try again.' 
      });
    }
    return;
  }

  // Method not allowed
  res.status(405).json({ error: 'Method not allowed' });
}

/*
API Endpoints:

1. GET /api/request-call - Retrieve all submissions
2. POST /api/request-call - Create new submission
3. PUT /api/request-call - Update submission status
4. DELETE /api/request-call?id={id} - Delete submission

Example usage:

GET all submissions:
curl https://your-domain.com/api/request-call

POST new submission:
curl -X POST https://your-domain.com/api/request-call \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "8340118918",
    "preferred_time": "morning",
    "message": "Interested in Class 11 PCM course"
  }'

PUT update status:
curl -X PUT https://your-domain.com/api/request-call \
  -H "Content-Type: application/json" \
  -d '{
    "id": "1",
    "status": "contacted"
  }'

DELETE submission:
curl -X DELETE https://your-domain.com/api/request-call?id=1

Expected responses:
{
  "status": "success",
  "message": "Operation completed successfully",
  "data": {...}
}
*/