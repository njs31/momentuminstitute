# Supabase Integration Setup Guide

## Overview

This project has been updated to use Supabase for the Request a Call Back form functionality. The integration includes:

- **Form Submission**: Stores callback requests in Supabase database
- **Admin Dashboard**: Real-time management of callback requests
- **Status Management**: Track request status (new, contacted, enrolled, not_interested)
- **Data Persistence**: All data is stored in Supabase cloud database

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and anon key

### 3. Environment Variables

Create a `.env` file in the project root with:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Database Setup

In your Supabase dashboard, create a table called `callback_requests` with the following SQL:

```sql
CREATE TABLE callback_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'not_interested'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE callback_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for demo purposes)
-- In production, you should restrict this based on your needs
CREATE POLICY "Allow all operations" ON callback_requests FOR ALL USING (true);
```

### 5. Run the Application

```bash
npm run dev
```

## Features

### Request a Call Back Form

- **Form Validation**: Name and phone are required, phone must be 10 digits
- **Real-time Submission**: Data is immediately stored in Supabase
- **Success Feedback**: Users see confirmation and form auto-closes
- **Error Handling**: Graceful fallback if Supabase is unavailable

### Admin Dashboard

- **Real-time Data**: Live updates from Supabase
- **Status Management**: Update request status (new → contacted → enrolled)
- **Search & Filter**: Find specific requests by name, phone, or message
- **Export Functionality**: Download data as CSV
- **Responsive Design**: Works on all device sizes

## API Endpoints

The following operations are handled through Supabase:

- **CREATE**: `CallbackService.createRequest()` - Submit new callback request
- **READ**: `CallbackService.getAllRequests()` - Get all requests for admin
- **UPDATE**: `CallbackService.updateStatus()` - Update request status
- **DELETE**: `CallbackService.deleteRequest()` - Remove request

## Error Handling

The system includes comprehensive error handling:

- **Network Issues**: Graceful fallback to mock data
- **Validation Errors**: User-friendly error messages
- **Database Errors**: Logged for debugging
- **Offline Support**: Form still works with local state

## Security Considerations

- **Row Level Security**: Enabled on database tables
- **Environment Variables**: Sensitive keys stored in .env
- **Input Validation**: Server-side and client-side validation
- **CORS**: Properly configured for cross-origin requests

## Production Deployment

1. **Environment Variables**: Set production Supabase credentials
2. **Database Policies**: Restrict access based on user roles
3. **Monitoring**: Enable Supabase analytics and logging
4. **Backup**: Configure automated database backups
5. **SSL**: Ensure HTTPS is enabled

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**

   - Check your .env file exists and has correct values
   - Restart the development server after adding .env

2. **"Failed to fetch submissions"**

   - Verify Supabase project is active
   - Check database table exists and has correct structure
   - Verify RLS policies are configured

3. **Form not submitting**
   - Check browser console for errors
   - Verify Supabase credentials are correct
   - Check network connectivity

### Debug Mode

Enable detailed logging by checking the browser console for:

- Supabase connection status
- API request/response details
- Error messages and stack traces

## Support

For issues related to:

- **Supabase**: Check [Supabase documentation](https://supabase.com/docs)
- **React/TypeScript**: Check component console logs
- **Database**: Verify table structure and policies in Supabase dashboard
