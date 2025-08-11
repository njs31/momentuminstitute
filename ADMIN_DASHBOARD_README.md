# Admin Dashboard - Momentum Institute

## Overview

The Admin Dashboard is a comprehensive tool for managing student inquiries and form submissions from the Momentum Institute website. It provides real-time access to all "Request a Call" form submissions with powerful filtering, search, and management capabilities.

## Access Information

### Login Credentials

- **URL**: `/admin-login` or `/admin` (redirects to login if not authenticated)
- **Username**: `admin`
- **Password**: `momentum2024`

### Security Features

- Session-based authentication with 24-hour expiry
- Protected routes requiring login
- Automatic logout on session expiration
- Secure password handling

## Dashboard Features

### 1. Statistics Overview

The dashboard displays key metrics at the top:

- **Total Submissions**: Overall count of all form submissions
- **New**: Submissions marked as "new" (not yet contacted)
- **Contacted**: Submissions where initial contact has been made
- **Enrolled**: Students who have successfully enrolled
- **Not Interested**: Students who declined to proceed

### 2. Search and Filtering

- **Search Bar**: Search by student name, phone number, or message content
- **Status Filter**: Filter submissions by current status
- **Real-time Results**: Instant filtering as you type

### 3. Submissions Management

- **View All Submissions**: Complete list with pagination
- **Status Updates**: Change submission status directly from the table
- **Detailed View**: Click the eye icon to see full submission details
- **Delete Submissions**: Remove unwanted or duplicate submissions

### 4. Export Functionality

- **CSV Export**: Download filtered results as CSV file
- **Custom Naming**: Files automatically named with current date
- **Complete Data**: Includes all submission fields and status

## Submission Status Management

### Status Types

1. **New** (Blue): Fresh submissions requiring attention
2. **Contacted** (Yellow): Initial contact made, follow-up needed
3. **Enrolled** (Green): Successfully converted to student
4. **Not Interested** (Red): Student declined to proceed

### Status Workflow

```
New → Contacted → Enrolled
  ↓         ↓
Not Interested
```

## Detailed Submission View

### Information Displayed

- **Student Name**: Full name of the person
- **Phone Number**: Contact number for follow-up
- **Preferred Time**: When they prefer to be called
- **Message**: Their inquiry or request
- **Submission Date**: When the form was submitted
- **Current Status**: Current tracking status

### Actions Available

- **Update Status**: Change submission status
- **Call Student**: Direct phone call integration
- **View Full Details**: Complete submission information

## API Integration

### Endpoints Used

- `GET /api/request-call` - Retrieve all submissions
- `POST /api/request-call` - Create new submission (from website)
- `PUT /api/request-call` - Update submission status
- `DELETE /api/request-call` - Remove submission

### Data Structure

```typescript
interface FormSubmission {
  id: string;
  name: string;
  phone: string;
  preferred_time: string;
  message: string;
  submitted_at: string;
  status: "new" | "contacted" | "enrolled" | "not_interested";
}
```

## Usage Instructions

### Daily Operations

1. **Login** to the admin dashboard
2. **Review New Submissions** in the "New" status
3. **Update Status** as you make contact with students
4. **Export Data** for reporting or CRM integration
5. **Logout** when finished

### Best Practices

- Update status immediately after contacting students
- Use consistent status updates for accurate tracking
- Export data regularly for backup purposes
- Review "Not Interested" submissions for potential follow-up

### Student Follow-up Process

1. **New Submission** arrives → Status: "New"
2. **Make Initial Contact** → Status: "Contacted"
3. **Student Enrolls** → Status: "Enrolled"
4. **Student Declines** → Status: "Not Interested"

## Technical Details

### Frontend Technologies

- React with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- React Router for navigation

### State Management

- Local state with React hooks
- Real-time updates via API calls
- Fallback to mock data if API unavailable

### Responsive Design

- Mobile-first approach
- Works on all device sizes
- Touch-friendly interface

## Troubleshooting

### Common Issues

1. **Login Fails**: Check username/password, clear browser cache
2. **Data Not Loading**: Check API endpoint, refresh page
3. **Status Not Updating**: Check network connection, refresh data
4. **Session Expired**: Re-login to continue

### Error Handling

- Graceful fallback to mock data
- Clear error messages displayed
- Automatic retry mechanisms
- User-friendly error notifications

## Security Considerations

### Current Implementation

- Basic authentication with hardcoded credentials
- Session-based authentication with localStorage
- 24-hour session timeout
- Protected route implementation

### Production Recommendations

- Implement proper JWT authentication
- Use secure HTTP-only cookies
- Add rate limiting for login attempts
- Implement password hashing and salting
- Add two-factor authentication
- Use HTTPS for all communications

## Data Management

### Storage

- Currently uses in-memory storage (resets on server restart)
- API endpoints ready for database integration
- CSV export for data backup

### Backup Recommendations

- Export data weekly as CSV
- Integrate with external CRM system
- Implement automated database backups
- Use cloud storage for data redundancy

## Integration Possibilities

### CRM Systems

- Salesforce integration
- HubSpot connection
- Custom CRM development
- Email marketing platforms

### Communication Tools

- SMS integration for notifications
- Email automation
- WhatsApp Business API
- Phone system integration

### Analytics

- Google Analytics integration
- Conversion tracking
- Performance metrics
- Student journey analysis

## Support and Maintenance

### Regular Tasks

- Monitor API performance
- Update submission statuses
- Export and backup data
- Review and clean old submissions

### Updates and Improvements

- Regular security updates
- Feature enhancements
- Performance optimizations
- User experience improvements

## Contact Information

For technical support or questions about the admin dashboard:

- **Developer**: AI Assistant
- **Institute**: Momentum Institute
- **Domain**: momentuminstitute.in

---

**Note**: This dashboard is designed for internal use by Momentum Institute staff. Please maintain confidentiality of student information and follow data protection guidelines.
