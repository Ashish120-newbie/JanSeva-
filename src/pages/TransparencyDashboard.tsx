import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {
  TrendingUp,
  Users,
  CheckCircle,
  BarChart3,
  Star,
  Award,
  Globe,
} from 'lucide-react';
import { transparencyData } from '@/data/mockData';
import { cn } from '@/lib/utils';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export function TransparencyDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-6 h-6 text-blue-600" />
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            Public Dashboard
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Public Transparency Dashboard</h1>
        <p className="text-slate-600">Real-time visibility into government complaint handling performance</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-8 h-8 opacity-80" />
          </div>
          <p className="text-4xl font-bold">{transparencyData.totalComplaints.toLocaleString()}</p>
          <p className="text-blue-100">Total Complaints Received</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="w-8 h-8 opacity-80" />
          </div>
          <p className="text-4xl font-bold">{transparencyData.totalResolved.toLocaleString()}</p>
          <p className="text-green-100">Total Resolved</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 opacity-80" />
          </div>
          <p className="text-4xl font-bold">{transparencyData.resolutionRate}%</p>
          <p className="text-purple-100">Overall Resolution Rate</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Categories */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Top Complaint Categories
            </h2>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transparencyData.topCategories} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis type="category" dataKey="category" stroke="#64748b" fontSize={12} width={120} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {transparencyData.topCategories.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Best Performing Departments */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Best Performing Departments
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {transparencyData.bestDepartments.map((dept, index) => (
              <div key={dept.department} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm',
                      index === 0 && 'bg-gradient-to-br from-yellow-400 to-amber-500',
                      index === 1 && 'bg-gradient-to-br from-slate-300 to-slate-400',
                      index === 2 && 'bg-gradient-to-br from-amber-600 to-orange-700',
                      index > 2 && 'bg-slate-200 text-slate-600'
                    )}>
                      {index + 1}
                    </div>
                    <span className="font-medium text-slate-900">{dept.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-slate-900">{dept.rating}%</span>
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
                    style={{ width: `${dept.rating}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">24,780</p>
          <p className="text-sm text-slate-500">Active Citizens</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">4.2 days</p>
          <p className="text-sm text-slate-500">Avg. Resolution</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
            <Star className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">4.5/5</p>
          <p className="text-sm text-slate-500">Citizen Rating</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">156</p>
          <p className="text-sm text-slate-500">Officers Recognized</p>
        </div>
      </div>

      {/* Open Data Notice */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Open Data Initiative</h3>
            <p className="text-sm text-slate-600">
              This dashboard is part of the government's commitment to transparency.
              All data is updated in real-time and available for public access.
            </p>
          </div>
          <button className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm whitespace-nowrap">
            Download Dataset
          </button>
        </div>
      </div>
    </div>
  );
}
