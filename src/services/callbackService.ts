import { supabase, CallbackRequest, CallbackRequestResponse } from '../lib/supabase'

export class CallbackService {
  // Create a new callback request
  static async createRequest(request: CallbackRequest): Promise<CallbackRequestResponse> {
    try {
      const { data, error } = await supabase
        .from('callback_requests')
        .insert([{
          name: request.name,
          phone: request.phone,
          preferred_time: request.preferred_time,
          message: request.message,
          status: 'new'
        }])
        .select()
        .single()

      if (error) {
        console.error('Supabase error:', error)
        return {
          status: 'error',
          message: 'Failed to submit request. Please try again.',
          error: error.message
        }
      }

      return {
        status: 'success',
        message: 'Request received. We will call you shortly.',
        data: data
      }
    } catch (error) {
      console.error('Service error:', error)
      return {
        status: 'error',
        message: 'An unexpected error occurred. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Get all callback requests (for admin dashboard)
  static async getAllRequests(): Promise<CallbackRequestResponse> {
    try {
      const { data, error } = await supabase
        .from('callback_requests')
        .select('*')
        .order('submitted_at', { ascending: false })

      if (error) {
        console.error('Supabase error:', error)
        return {
          status: 'error',
          message: 'Failed to fetch requests.',
          error: error.message
        }
      }

      return {
        status: 'success',
        message: 'Requests fetched successfully.',
        data: data as CallbackRequest
      }
    } catch (error) {
      console.error('Service error:', error)
      return {
        status: 'error',
        message: 'An unexpected error occurred.',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Update request status
  static async updateStatus(id: string, status: CallbackRequest['status']): Promise<CallbackRequestResponse> {
    try {
      const { data, error } = await supabase
        .from('callback_requests')
        .update({ status })
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error('Supabase error:', error)
        return {
          status: 'error',
          message: 'Failed to update status.',
          error: error.message
        }
      }

      return {
        status: 'success',
        message: 'Status updated successfully.',
        data: data
      }
    } catch (error) {
      console.error('Service error:', error)
      return {
        status: 'error',
        message: 'An unexpected error occurred.',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Delete a request
  static async deleteRequest(id: string): Promise<CallbackRequestResponse> {
    try {
      const { error } = await supabase
        .from('callback_requests')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Supabase error:', error)
        return {
          status: 'error',
          message: 'Failed to delete request.',
          error: error.message
        }
      }

      return {
        status: 'success',
        message: 'Request deleted successfully.'
      }
    } catch (error) {
      console.error('Service error:', error)
      return {
        status: 'error',
        message: 'An unexpected error occurred.',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }
}
