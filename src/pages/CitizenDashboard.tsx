import { Link } from 'react-router-dom';
import {
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Bell,
  ArrowRight,
  Search,
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  Calendar,
  MapPin,
  Building2,
  ChevronRight,
} from 'lucide-react';
import { mockComplaints, mockNotifications, mockSchemes, mockAnalytics } from '@/data/mockData';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const quickActions = [
  { name: 'File Complaint', icon: FileText, path: '/file-complaint', color: 'blue' },
  { name: 'Track Complaint', icon: Search, path: '/track', color: 'green' },
  { name: 'AI Assistant', icon: MessageSquare, path: '/assistant', color: 'purple' },
  { name: 'Emergency Report', icon: AlertTriangle, path: '/file-complaint?emergency=true', color: 'red' },
];

export function CitizenDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back!</h1>
        <p className="text-slate-600">Here's your citizen dashboard overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-slate-500">Total</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{mockAnalytics.totalComplaints}</p>
          <p className="text-sm text-slate-600">Total Complaints</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-sm text-slate-500">Active</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {mockAnalytics.totalComplaints - mockAnalytics.totalResolved}
          </p>
          <p className="text-sm text-slate-600">Active Complaints</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-slate-500">Resolved</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{mockAnalytics.totalResolved}</p>
          <p className="text-sm text-slate-600">Resolved Complaints</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-slate-500">Rate</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{mockAnalytics.resolutionRate}%</p>
          <p className="text-sm text-slate-600">Resolution Rate</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            const colorMap: Record<string, string> = {
              blue: 'bg-blue-500',
              green: 'bg-green-500',
              purple: 'bg-purple-500',
              red: 'bg-red-500',
            };
            return (
              <Link
                key={action.name}
                to={action.path}
                className="group bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md transition-all"
              >
                <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center mb-3', colorMap[action.color])}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-medium text-slate-900">{action.name}</p>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform inline-block mt-1" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Complaints */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Recent Complaints</h2>
            <Link to="/track" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {mockComplaints.slice(0, 4).map((complaint) => (
              <Link
                key={complaint.id}
                to={`/track?id=${complaint.id}`}
                className="block p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-slate-900">{complaint.title}</p>
                    <p className="text-sm text-slate-500">{complaint.id}</p>
                  </div>
                  <span
                    className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      complaint.status === 'resolved' && 'bg-green-100 text-green-700',
                      complaint.status === 'reviewing' && 'bg-blue-100 text-blue-700',
                      complaint.status === 'assigned' && 'bg-amber-100 text-amber-700',
                      complaint.status === 'submitted' && 'bg-slate-100 text-slate-700',
                      complaint.status === 'action_taken' && 'bg-purple-100 text-purple-700'
                    )}
                  >
                    {complaint.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {complaint.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {complaint.location}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </h2>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {mockNotifications.filter(n => !n.read).length} new
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {mockNotifications.slice(0, 3).map((notification) => (
                <div key={notification.id} className={cn(
                  'p-4',
                  !notification.read && 'bg-blue-50/50'
                )}>
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      'w-2 h-2 rounded-full mt-2',
                      notification.type === 'success' && 'bg-green-500',
                      notification.type === 'warning' && 'bg-amber-500',
                      notification.type === 'info' && 'bg-blue-500',
                      notification.type === 'urgent' && 'bg-red-500'
                    )} />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{notification.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{notification.message}</p>
                      <p className="text-xs text-slate-400 mt-1">
                        {format(notification.timestamp, 'MMM d, h:mm a')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Deadlines
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {mockComplaints.filter(c => c.status !== 'resolved' && c.status !== 'feedback').slice(0, 3).map((complaint) => (
                <div key={complaint.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{complaint.id}</p>
                    <p className="text-xs text-slate-500">{complaint.title.substring(0, 30)}...</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900">
                      {format(complaint.estimatedResolution, 'MMM d')}
                    </p>
                    <p className="text-xs text-slate-500">Est. Resolution</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Schemes */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">Recommended Schemes</h2>
              <Link to="/schemes" className="text-sm text-blue-600 hover:text-blue-700">
                View All
              </Link>
            </div>
            <div className="p-4 space-y-3">
              {mockSchemes.slice(0, 2).map((scheme) => (
                <Link
                  key={scheme.id}
                  to="/schemes"
                  className="block p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors"
                >
                  <p className="font-medium text-slate-900 text-sm">{scheme.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{scheme.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
