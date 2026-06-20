import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import {
  FileText,
  CheckCircle,
  Clock,
  Star,
  TrendingUp,
  AlertCircle,
  Calendar,
  ArrowRight,
  User,
  Building2,
} from 'lucide-react';
import { officerStats, mockComplaints } from '@/data/mockData';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export function OfficerDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Officer Dashboard</h1>
            <p className="text-slate-600">Monitor your assigned complaints and performance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              RK
            </div>
            <div>
              <p className="font-medium text-slate-900">Rajesh Kumar</p>
              <p className="text-sm text-slate-500">Electricity Department</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900">{officerStats.complaintsAssigned}</p>
          <p className="text-sm text-slate-600">Assigned</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900">{officerStats.complaintsResolved}</p>
          <p className="text-sm text-slate-600">Resolved</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900">{officerStats.pendingCases}</p>
          <p className="text-sm text-slate-600">Pending</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900">{officerStats.averageResolutionTime}</p>
          <p className="text-sm text-slate-600">Avg. Days</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900">{officerStats.citizenSatisfaction}%</p>
          <p className="text-sm text-slate-600">Satisfaction</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Performance */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Monthly Performance</h2>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={officerStats.monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} name="Resolved" />
                <Line type="monotone" dataKey="assigned" stroke="#3b82f6" strokeWidth={2} name="Assigned" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Satisfaction Comparison */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Citizen Satisfaction Comparison</h2>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={officerStats.departmentComparison}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="department" stroke="#64748b" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#64748b" fontSize={10} />
                <Radar name="Satisfaction %" dataKey="satisfaction" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pending Complaints */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Pending Complaints</h2>
          <span className="text-sm text-slate-500">{officerStats.pendingCases} cases require attention</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Filed Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockComplaints.filter(c => c.status !== 'resolved' && c.status !== 'feedback').map((complaint) => (
                <tr key={complaint.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-blue-600">{complaint.id}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{complaint.title}</p>
                      <p className="text-xs text-slate-500">{complaint.location}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      complaint.priority === 'urgent' && 'bg-red-100 text-red-700',
                      complaint.priority === 'high' && 'bg-orange-100 text-orange-700',
                      complaint.priority === 'medium' && 'bg-amber-100 text-amber-700',
                      complaint.priority === 'low' && 'bg-green-100 text-green-700'
                    )}>
                      {complaint.priority.charAt(0).toUpperCase()}{complaint.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{format(complaint.createdAt, 'MMM d, yyyy')}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{format(complaint.estimatedResolution, 'MMM d, yyyy')}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      complaint.status === 'reviewing' && 'bg-blue-100 text-blue-700',
                      complaint.status === 'assigned' && 'bg-amber-100 text-amber-700',
                      complaint.status === 'action_taken' && 'bg-purple-100 text-purple-700',
                      complaint.status === 'submitted' && 'bg-slate-100 text-slate-700'
                    )}>
                      {complaint.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/track?id=${complaint.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-end gap-1"
                    >
                      View <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
