import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface BookCallData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string | Date;
  message?: string;
  timezone: string;
}

export interface BookCallResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    message?: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    timezone: string;
    source: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const bookCall = async (data: BookCallData): Promise<BookCallResponse> => {
  try {
    const response = await axios.post<BookCallResponse>(
      `${API_BASE_URL}/book-call`,
      {
        ...data,
        preferredDate: new Date(data.preferredDate).toISOString(),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          error.response.data.message || 'Failed to book call. Please try again.'
        );
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error('No response from server. Please check your connection.');
      }
    }
    
    // Something happened in setting up the request that triggered an Error
    throw new Error('An error occurred while processing your request.');
  }
};

export const getBookCalls = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/book-call`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching book calls:', error);
    throw error;
  }
};

export const updateBookCallStatus = async (id: string, status: string, token: string) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/book-call/${id}/status`,
      { status },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating book call status:', error);
    throw error;
  }
};
