import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  FileText,
  CheckCircle,
  Circle,
  Clock,
  Building2,
  MapPin,
  Phone,
  Calendar,
  User,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockComplaints } from '@/data/mockData';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const statusStages = [
  { id: 'submitted', label: 'Submitted', description: 'Complaint received' },
  { id: 'verified', label: 'AI Verified', description: 'Verified by AI' },
  { id: 'assigned', label: 'Assigned', description: 'Department assigned' },
  { id: 'reviewing', label: 'Reviewing', description: 'Officer reviewing' },
  { id: 'action_taken', label: 'Action Taken', description: 'Action initiated' },
  { id: 'resolved', label: 'Resolved', description: 'Issue resolved' },
  { id: 'feedback', label: 'Feedback', description: 'Citizen feedback' },
];

export function TrackComplaintPage() {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get('id') || '';
  const [searchId, setSearchId] = useState(initialId);
  const [selectedComplaint, setSelectedComplaint] = useState(
    mockComplaints.find(c => c.id === initialId) || null
  );

  const handleSearch = () => {
    const found = mockComplaints.find(c => c.id.toLowerCase() === searchId.toLowerCase());
    setSelectedComplaint(found || null);
  };

  const getCurrentStageIndex = (status: string) => {
    return statusStages.findIndex(s => s.id === status);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Track Your Complaint</h1>
        <p className="text-slate-600">Enter your complaint ID to see real-time status updates</p>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter complaint ID (e.g., CVC2024001)"
            />
          </div>
          <Button onClick={handleSearch} className="h-12 px-6">
            <Search className="w-5 h-5 mr-2" />
            Track
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-sm text-slate-500">Quick access:</span>
          {mockComplaints.slice(0, 3).map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSearchId(c.id);
                setSelectedComplaint(c);
              }}
              className="text-sm px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              {c.id}
            </button>
          ))}
        </div>
      </div>

      {selectedComplaint && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
          {/* Complaint Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Complaint Details
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Complaint ID</p>
                  <p className="font-bold text-lg text-blue-600">{selectedComplaint.id}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Title</p>
                  <p className="font-semibold text-slate-900">{selectedComplaint.title}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Description</p>
                  <p className="text-sm text-slate-600">{selectedComplaint.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Category</p>
                    <p className="text-sm font-medium text-slate-900">{selectedComplaint.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Priority</p>
                    <span className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      selectedComplaint.priority === 'urgent' && 'bg-red-100 text-red-700',
                      selectedComplaint.priority === 'high' && 'bg-orange-100 text-orange-700',
                      selectedComplaint.priority === 'medium' && 'bg-amber-100 text-amber-700',
                      selectedComplaint.priority === 'low' && 'bg-green-100 text-green-700'
                    )}>
                      {selectedComplaint.priority.charAt(0).toUpperCase()}{selectedComplaint.priority.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Building2 className="w-4 h-4" />
                  {selectedComplaint.department}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" />
                  {selectedComplaint.location}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  Filed on {format(selectedComplaint.createdAt, 'MMM d, yyyy')}
                </div>

                {selectedComplaint.assignedOfficer && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User className="w-4 h-4" />
                    Officer: {selectedComplaint.assignedOfficer}
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4" />
                  Est. Resolution: {format(selectedComplaint.estimatedResolution, 'MMM d, yyyy')}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h2 className="font-semibold text-slate-900">Progress Tracker</h2>
              </div>
              <div className="p-6">
                {/* Horizontal Timeline for Desktop */}
                <div className="hidden md:block mb-8">
                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                        style={{
                          width: `${((getCurrentStageIndex(selectedComplaint.status) + 1) / statusStages.length) * 100}%`,
                        }}
                      />
                    </div>

                    {/* Stage Circles */}
                    <div className="relative flex justify-between">
                      {statusStages.map((stage, index) => {
                        const isCompleted = index <= getCurrentStageIndex(selectedComplaint.status);
                        const isCurrent = index === getCurrentStageIndex(selectedComplaint.status);
                        return (
                          <div key={stage.id} className="flex flex-col items-center">
                            <div
                              className={cn(
                                'w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300',
                                isCompleted
                                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                                  : 'bg-white border-2 border-slate-200 text-slate-400'
                              )}
                            >
                              {isCompleted ? (
                                <CheckCircle className="w-6 h-6" />
                              ) : (
                                <Circle className="w-6 h-6" />
                              )}
                            </div>
                            <p className={cn(
                              'mt-3 text-xs font-medium text-center',
                              isCurrent ? 'text-blue-600' : isCompleted ? 'text-slate-700' : 'text-slate-400'
                            )}>
                              {stage.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Vertical Timeline for Mobile */}
                <div className="md:hidden space-y-0">
                  {selectedComplaint.timeline.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={cn(
                          'w-10 h-10 rounded-full flex items-center justify-center',
                          event.completed
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                            : 'bg-slate-100 text-slate-400'
                        )}>
                          {event.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                        </div>
                        {index < selectedComplaint.timeline.length - 1 && (
                          <div className={cn(
                            'w-0.5 h-16',
                            event.completed ? 'bg-blue-300' : 'bg-slate-200'
                          )} />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className="font-medium text-slate-900">{event.description}</p>
                        <p className="text-sm text-slate-500">
                          {event.completed
                            ? format(event.timestamp, 'MMM d, yyyy h:mm a')
                            : 'Pending'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Timeline Details */}
                <div className="hidden md:block mt-8 border-t border-slate-100 pt-6 space-y-4">
                  <h3 className="font-semibold text-slate-900">Activity Log</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {selectedComplaint.timeline.filter(e => e.completed).map((event, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{event.description}</p>
                          <p className="text-xs text-slate-500">{format(event.timestamp, 'MMM d, yyyy h:mm a')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Section (if resolved) */}
            {selectedComplaint.status === 'feedback' && (
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6 animate-fade-in">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Provide Feedback
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Your complaint has been resolved. Please share your feedback to help us improve our services.
                </p>
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-yellow-50 hover:border-yellow-300 transition-colors"
                    >
                      <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </button>
                  ))}
                </div>
                <Button className="w-full sm:w-auto">
                  Submit Feedback
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {!selectedComplaint && searchId && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600">No complaint found with ID "{searchId}"</p>
          <p className="text-sm text-slate-400 mt-1">Please check the ID and try again</p>
        </div>
      )}
    </div>
  );
}
