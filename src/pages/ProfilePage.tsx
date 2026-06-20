import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Bell,
  Lock,
  Edit2,
  Save,
  Camera,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockComplaints } from '@/data/mockData';
import { format } from 'date-fns';

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Amit Sharma',
    email: 'amit.sharma@email.com',
    phone: '+91 98765 43210',
    address: 'Sector 15, Rohini, New Delhi - 110085',
    aadhaar: 'XXXX XXXX 4321',
    dob: '1990-05-15',
  });

  const userStats = {
    totalComplaints: 5,
    resolvedComplaints: 3,
    activeComplaints: 2,
    avgResponseTime: '3.5 days',
    satisfactionRate: 95,
  };

  const recentActivity = mockComplaints.filter(c => c.citizenId === 'CIT001' || true).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
        <p className="text-slate-600">Manage your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600" />
            <div className="relative px-6 pb-6">
              <div className="absolute -top-12 left-6 w-24 h-24 rounded-2xl bg-white border-4 border-white shadow-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <button className="absolute bottom-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-slate-50 transition-colors">
                  <Camera className="w-3 h-3 text-slate-600" />
                </button>
              </div>

              <div className="pt-16">
                <h2 className="text-xl font-bold text-slate-900">{profile.name}</h2>
                <p className="text-slate-500 text-sm">Citizen</p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="w-4 h-4" />
                    {profile.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4" />
                    {profile.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4" />
                    {profile.address}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{userStats.resolvedComplaints}</p>
                      <p className="text-xs text-slate-500">Resolved</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{userStats.activeComplaints}</p>
                      <p className="text-xs text-slate-500">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Settings */}
          <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-900">Quick Settings</h3>
            </div>
            <div className="p-4 space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                <Bell className="w-5 h-5 text-slate-400" />
                <span className="text-sm text-slate-700">Notifications</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                <Lock className="w-5 h-5 text-slate-400" />
                <span className="text-sm text-slate-700">Privacy & Security</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                <Shield className="w-5 h-5 text-slate-400" />
                <span className="text-sm text-slate-700">Account Verification</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Personal Information</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit
                  </>
                )}
              </Button>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-slate-900">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-slate-900">{profile.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-slate-900">{profile.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={profile.dob}
                    onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-slate-900">{format(new Date(profile.dob), 'MMMM d, yyyy')}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-500 mb-1">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-slate-900">{profile.address}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Aadhaar Number</label>
                <p className="text-slate-900">{profile.aadhaar}</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <Shield className="w-3 h-3" />
                  Verified
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-900">Recent Activity</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {recentActivity.map((complaint) => (
                <div key={complaint.id} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{complaint.title}</p>
                      <p className="text-sm text-slate-500">{complaint.id} • {complaint.department}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-700 capitalize">{complaint.status.replace('_', ' ')}</p>
                      <p className="text-xs text-slate-400">{format(complaint.createdAt, 'MMM d, yyyy')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
