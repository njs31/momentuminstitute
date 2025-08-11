import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Phone,
  Calendar,
  Search,
  Filter,
  Eye,
  Trash2,
  Download,
  RefreshCw,
  MessageSquare,
  Clock,
  User,
  Mail,
  LogOut,
} from "lucide-react";
import { CallbackService } from "../services/callbackService";
import { CallbackRequest } from "../lib/supabase";

// Use CallbackRequest type directly instead of duplicating
type FormSubmission = CallbackRequest & { id: string };

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<
    FormSubmission[]
  >([]);
  const [selectedSubmission, setSelectedSubmission] =
    useState<FormSubmission | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch submissions from Supabase
  const fetchSubmissions = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await CallbackService.getAllRequests();
      
      if (result.status === "success" && result.data) {
        // Handle the data properly - it might be an array or single object
        const submissionsData = Array.isArray(result.data) ? result.data : [result.data];
        // Filter out any entries without an id and ensure type safety
        const validSubmissions = submissionsData.filter((sub): sub is FormSubmission => 
          sub.id !== undefined
        );
        setSubmissions(validSubmissions);
        setFilteredSubmissions(validSubmissions);
      } else {
        throw new Error(result.message || "Failed to fetch submissions");
      }
    } catch (error) {
      console.error("Error fetching submissions:", error);
      setError(
        error instanceof Error ? error.message : "Failed to fetch submissions"
      );

      // Fallback to mock data if Supabase fails
      const mockSubmissions: FormSubmission[] = [
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

      setSubmissions(mockSubmissions);
      setFilteredSubmissions(mockSubmissions);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Filter and search submissions
  useEffect(() => {
    let filtered = submissions;

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((sub) => sub.status === statusFilter);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (sub) =>
          sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.phone.includes(searchTerm) ||
          sub.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSubmissions(filtered);
  }, [submissions, searchTerm, statusFilter]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminLoginTime");
    navigate("/admin-login");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "enrolled":
        return "bg-green-100 text-green-800";
      case "not_interested":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "new":
        return "New";
      case "contacted":
        return "Contacted";
      case "enrolled":
        return "Enrolled";
      case "not_interested":
        return "Not Interested";
      default:
        return "Unknown";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getPreferredTimeLabel = (time: string) => {
    switch (time) {
      case "morning":
        return "Morning (9 AM - 12 PM)";
      case "afternoon":
        return "Afternoon (2 PM - 5 PM)";
      case "evening":
        return "Evening (6 PM - 9 PM)";
      case "anytime":
        return "Anytime";
      default:
        return time;
    }
  };

  const updateStatus = async (
    id: string,
    newStatus: FormSubmission["status"]
  ) => {
    try {
      const result = await CallbackService.updateStatus(id, newStatus);
      
      if (result.status === "success") {
        setSubmissions((prev) =>
          prev.map((sub) =>
            sub.id === id ? { ...sub, status: newStatus } : sub
          )
        );
      } else {
        console.error("Failed to update status:", result.message);
        // Update locally if Supabase fails
        setSubmissions((prev) =>
          prev.map((sub) =>
            sub.id === id ? { ...sub, status: newStatus } : sub
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
      // Update locally if Supabase fails
      setSubmissions((prev) =>
        prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
      );
    }
  };

  const deleteSubmission = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      try {
        const result = await CallbackService.deleteRequest(id);
        
        if (result.status === "success") {
          setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
        } else {
          console.error("Failed to delete submission:", result.message);
          // Delete locally if Supabase fails
          setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
        }
      } catch (error) {
        console.error("Error deleting submission:", error);
        // Delete locally if Supabase fails
        setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
      }
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Phone",
      "Preferred Time",
      "Message",
      "Submitted At",
      "Status",
    ];
    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((sub) =>
        [
          sub.name,
          sub.phone,
          sub.preferred_time,
          sub.message.replace(/,/g, ";"),
          formatDate(sub.submitted_at),
          sub.status,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `form-submissions-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const stats = {
    total: submissions.length,
    new: submissions.filter((s) => s.status === "new").length,
    contacted: submissions.filter((s) => s.status === "contacted").length,
    enrolled: submissions.filter((s) => s.status === "enrolled").length,
    notInterested: submissions.filter((s) => s.status === "not_interested")
      .length,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-accent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage student inquiries and form submissions
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={exportToCSV}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button
                onClick={fetchSubmissions}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-red-700 font-medium">
                {error} - Using fallback data
              </span>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contacted</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {stats.contacted}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Enrolled</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.enrolled}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Not Interested
                </p>
                <p className="text-2xl font-bold text-red-600">
                  {stats.notInterested}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name, phone, or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="enrolled">Enrolled</option>
                <option value="not_interested">Not Interested</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preferred Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {submission.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {submission.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {submission.phone}
                      </div>
                      <div className="text-sm text-gray-500">
                        {submission.message.length > 50
                          ? `${submission.message.substring(0, 50)}...`
                          : submission.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {getPreferredTimeLabel(submission.preferred_time)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(submission.submitted_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={submission.status}
                        onChange={(e) =>
                          updateStatus(
                            submission.id!,
                            e.target.value as FormSubmission["status"]
                          )
                        }
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          submission.status
                        )} border-0 focus:ring-2 focus:ring-primary`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="enrolled">Enrolled</option>
                        <option value="not_interested">Not Interested</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedSubmission(submission);
                            setShowDetailModal(true);
                          }}
                          className="text-primary hover:text-primary-dark p-1"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteSubmission(submission.id!)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                No submissions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-accent">
                  Submission Details
                </h2>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student Name
                  </label>
                  <p className="text-lg text-gray-900">
                    {selectedSubmission.name}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <p className="text-lg text-gray-900">
                    {selectedSubmission.phone}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Call Time
                  </label>
                  <p className="text-lg text-gray-900">
                    {getPreferredTimeLabel(selectedSubmission.preferred_time)}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <p className="text-lg text-gray-900 bg-gray-50 p-3 rounded-lg">
                    {selectedSubmission.message}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Submitted At
                  </label>
                  <p className="text-lg text-gray-900">
                    {formatDate(selectedSubmission.submitted_at)}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Status
                  </label>
                  <select
                    value={selectedSubmission.status}
                                            onChange={(e) =>
                          updateStatus(
                            selectedSubmission.id!,
                            e.target.value as FormSubmission["status"]
                          )
                        }
                    className={`px-3 py-2 text-sm font-medium rounded-lg ${getStatusColor(
                      selectedSubmission.status
                    )} border-0 focus:ring-2 focus:ring-primary`