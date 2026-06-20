export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  status: 'submitted' | 'verified' | 'assigned' | 'reviewing' | 'action_taken' | 'resolved' | 'feedback';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  department: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedResolution: Date;
  assignedOfficer?: string;
  citizenId: string;
  citizenName: string;
  contactNumber: string;
  image?: string;
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  status: string;
  timestamp: Date;
  description: string;
  completed: boolean;
}

export interface GovernmentScheme {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string;
  category: string;
  deadline?: Date;
  icon: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export const departments = [
  'Water Supply',
  'Electricity',
  'Roads & Transport',
  'Public Health',
  'Sanitation',
  'Education',
  'Police',
  'Revenue',
  'Agriculture',
  'Housing',
];

export const complaintCategories = [
  'Infrastructure',
  'Public Services',
  'Health & Safety',
  'Environment',
  'Transportation',
  'Utilities',
  'Education',
  'Corruption',
  'Other',
];

export const mockComplaints: Complaint[] = [
  {
    id: 'CVC2024001',
    title: 'Broken Street Lights in Sector 15',
    description: 'Multiple street lights have been non-functional for over 2 weeks, causing safety concerns for residents returning home late at night.',
    category: 'Infrastructure',
    location: 'Sector 15, Main Road',
    status: 'reviewing',
    priority: 'high',
    department: 'Electricity',
    createdAt: new Date('2024-01-15T10:30:00'),
    updatedAt: new Date('2024-01-18T14:20:00'),
    estimatedResolution: new Date('2024-01-25'),
    assignedOfficer: 'Rajesh Kumar',
    citizenId: 'CIT001',
    citizenName: 'Amit Sharma',
    contactNumber: '+91 98765 43210',
    timeline: [
      { status: 'submitted', timestamp: new Date('2024-01-15T10:30:00'), description: 'Complaint submitted successfully', completed: true },
      { status: 'verified', timestamp: new Date('2024-01-15T11:00:00'), description: 'AI verified complaint details', completed: true },
      { status: 'assigned', timestamp: new Date('2024-01-16T09:00:00'), description: 'Assigned to Electricity Department', completed: true },
      { status: 'reviewing', timestamp: new Date('2024-01-17T10:00:00'), description: 'Officer Rajesh Kumar is reviewing', completed: true },
      { status: 'action_taken', timestamp: new Date(), description: 'Action to be taken', completed: false },
      { status: 'resolved', timestamp: new Date(), description: 'Resolution pending', completed: false },
      { status: 'feedback', timestamp: new Date(), description: 'Feedback pending', completed: false },
    ],
  },
  {
    id: 'CVC2024002',
    title: 'Water Supply Irregularities',
    description: 'Water supply in our area has been irregular for the past month. We receive water only every alternate day instead of daily supply.',
    category: 'Public Services',
    location: 'Rohini Sector 8',
    status: 'assigned',
    priority: 'urgent',
    department: 'Water Supply',
    createdAt: new Date('2024-01-16T08:00:00'),
    updatedAt: new Date('2024-01-16T09:30:00'),
    estimatedResolution: new Date('2024-01-30'),
    citizenId: 'CIT002',
    citizenName: 'Priya Verma',
    contactNumber: '+91 87654 32109',
    timeline: [
      { status: 'submitted', timestamp: new Date('2024-01-16T08:00:00'), description: 'Complaint submitted', completed: true },
      { status: 'verified', timestamp: new Date('2024-01-16T08:30:00'), description: 'AI verified and flagged as urgent', completed: true },
      { status: 'assigned', timestamp: new Date('2024-01-16T09:30:00'), description: 'Assigned to Water Supply Department', completed: true },
      { status: 'reviewing', timestamp: new Date(), description: 'Pending review', completed: false },
      { status: 'action_taken', timestamp: new Date(), description: 'Action pending', completed: false },
      { status: 'resolved', timestamp: new Date(), description: 'Resolution pending', completed: false },
      { status: 'feedback', timestamp: new Date(), description: 'Feedback pending', completed: false },
    ],
  },
  {
    id: 'CVC2024003',
    title: 'Pothole on Main Market Road',
    description: 'A large pothole has developed on the main market road, causing traffic jams and vehicle damage. Multiple accidents have occurred.',
    category: 'Transportation',
    location: 'Main Market Road, Near Bus Stand',
    status: 'resolved',
    priority: 'high',
    department: 'Roads & Transport',
    createdAt: new Date('2024-01-10T12:00:00'),
    updatedAt: new Date('2024-01-20T16:00:00'),
    estimatedResolution: new Date('2024-01-20'),
    assignedOfficer: 'Suresh Patel',
    citizenId: 'CIT003',
    citizenName: 'Ramesh Gupta',
    contactNumber: '+91 76543 21098',
    timeline: [
      { status: 'submitted', timestamp: new Date('2024-01-10T12:00:00'), description: 'Complaint submitted', completed: true },
      { status: 'verified', timestamp: new Date('2024-01-10T12:30:00'), description: 'AI verification complete', completed: true },
      { status: 'assigned', timestamp: new Date('2024-01-11T09:00:00'), description: 'Assigned to Roads Department', completed: true },
      { status: 'reviewing', timestamp: new Date('2024-01-12T10:00:00'), description: 'Site inspection conducted', completed: true },
      { status: 'action_taken', timestamp: new Date('2024-01-18T08:00:00'), description: 'Repair work started', completed: true },
      { status: 'resolved', timestamp: new Date('2024-01-20T16:00:00'), description: 'Road repaired successfully', completed: true },
      { status: 'feedback', timestamp: new Date('2024-01-21T10:00:00'), description: 'Citizen provided 5-star rating', completed: true },
    ],
  },
  {
    id: 'CVC2024004',
    title: 'Garbage Collection Not Done',
    description: 'Garbage has not been collected from our street for the past week, causing unhygienic conditions and foul smell.',
    category: 'Environment',
    location: 'Vasant Kunj, Block B',
    status: 'action_taken',
    priority: 'medium',
    department: 'Sanitation',
    createdAt: new Date('2024-01-14T07:00:00'),
    updatedAt: new Date('2024-01-19T11:00:00'),
    estimatedResolution: new Date('2024-01-22'),
    assignedOfficer: 'Meena Devi',
    citizenId: 'CIT004',
    citizenName: 'Sunita Rani',
    contactNumber: '+91 65432 10987',
    timeline: [
      { status: 'submitted', timestamp: new Date('2024-01-14T07:00:00'), description: 'Complaint submitted', completed: true },
      { status: 'verified', timestamp: new Date('2024-01-14T07:30:00'), description: 'Verified by AI', completed: true },
      { status: 'assigned', timestamp: new Date('2024-01-14T10:00:00'), description: 'Assigned to Sanitation', completed: true },
      { status: 'reviewing', timestamp: new Date('2024-01-15T09:00:00'), description: 'Area inspection done', completed: true },
      { status: 'action_taken', timestamp: new Date('2024-01-19T11:00:00'), description: 'Special cleaning scheduled', completed: true },
      { status: 'resolved', timestamp: new Date(), description: 'Resolution pending', completed: false },
      { status: 'feedback', timestamp: new Date(), description: 'Feedback pending', completed: false },
    ],
  },
  {
    id: 'CVC2024005',
    title: 'Illegal Construction Blocking Drainage',
    description: 'An illegal construction is blocking the main drainage line, causing waterlogging during rains.',
    category: 'Infrastructure',
    location: 'Civil Lines, Ward 5',
    status: 'submitted',
    priority: 'high',
    department: 'Housing',
    createdAt: new Date('2024-01-19T15:00:00'),
    updatedAt: new Date('2024-01-19T15:00:00'),
    estimatedResolution: new Date('2024-02-05'),
    citizenId: 'CIT005',
    citizenName: 'Deepak Singh',
    contactNumber: '+91 54321 09876',
    timeline: [
      { status: 'submitted', timestamp: new Date('2024-01-19T15:00:00'), description: 'Complaint submitted', completed: true },
      { status: 'verified', timestamp: new Date(), description: 'AI verification pending', completed: false },
      { status: 'assigned', timestamp: new Date(), description: 'Assignment pending', completed: false },
      { status: 'reviewing', timestamp: new Date(), description: 'Review pending', completed: false },
      { status: 'action_taken', timestamp: new Date(), description: 'Action pending', completed: false },
      { status: 'resolved', timestamp: new Date(), description: 'Resolution pending', completed: false },
      { status: 'feedback', timestamp: new Date(), description: 'Feedback pending', completed: false },
    ],
  },
];

export const mockSchemes: GovernmentScheme[] = [
  {
    id: 'SCH001',
    title: 'National Scholarship Portal',
    description: 'Financial assistance for students from economically weaker sections pursuing higher education.',
    eligibility: ['Family income below 6 lakhs/year', 'Minimum 60% marks in last exam', 'Indian citizen'],
    benefits: 'Up to Rs. 50,000 per year for tuition and maintenance',
    category: 'Education',
    deadline: new Date('2024-03-31'),
    icon: 'GraduationCap',
  },
  {
    id: 'SCH002',
    title: 'PM-KISAN Samman Nidhi',
    description: 'Direct income support of Rs. 6000 per year to eligible farmer families.',
    eligibility: ['Landholding farmer family', 'Cultivable land ownership', 'Valid Aadhaar linked to bank'],
    benefits: 'Rs. 6,000 per year in 3 installments of Rs. 2,000 each',
    category: 'Agriculture',
    icon: 'Leaf',
  },
  {
    id: 'SCH003',
    title: 'Sukanya Samriddhi Yojana',
    description: 'Savings scheme for girl child to ensure her education and marriage expenses.',
    eligibility: ['Girl child below 10 years', 'Indian citizen', 'Maximum 2 girls per family'],
    benefits: 'High interest rate (7.6%), tax benefits, maturity in 21 years',
    category: 'Women Welfare',
    icon: 'Heart',
  },
  {
    id: 'SCH004',
    title: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana',
    description: 'Health insurance scheme providing coverage up to Rs. 5 lakhs per family per year.',
    eligibility: ['Family included in SECC database', 'No member with government job', 'Rural/urban poor criteria'],
    benefits: 'Free hospitalization up to Rs. 5 lakhs at empanelled hospitals',
    category: 'Healthcare',
    icon: 'Activity',
  },
  {
    id: 'SCH005',
    title: 'Pradhan Mantri Awas Yojana',
    description: 'Housing scheme for urban and rural poor to provide affordable housing.',
    eligibility: ['EWS/LIG/MIG category', 'No pucca house in family name', 'Valid Aadhaar and income proof'],
    benefits: 'Interest subsidy of up to 6.5% on home loan, subsidy up to Rs. 2.67 lakhs',
    category: 'Housing',
    icon: 'Home',
  },
  {
    id: 'SCH006',
    title: 'National Pension System for Senior Citizens',
    description: 'Pension scheme for senior citizens aged 60 years and above.',
    eligibility: ['Age 60 years or above', 'Valid Aadhaar and bank account', 'Indian citizen'],
    benefits: 'Guaranteed pension scheme with 8% returns, minimum pension Rs. 1000/month',
    category: 'Senior Citizens',
    icon: 'Users',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: 'NOT001',
    type: 'success',
    title: 'Complaint Resolved',
    message: 'Your complaint CVC2024003 has been marked as resolved. Please provide feedback.',
    timestamp: new Date('2024-01-20T16:30:00'),
    read: false,
  },
  {
    id: 'NOT002',
    type: 'info',
    title: 'Status Update',
    message: 'Your complaint CVC2024001 is under review by the Electricity Department.',
    timestamp: new Date('2024-01-18T14:20:00'),
    read: false,
  },
  {
    id: 'NOT003',
    type: 'warning',
    title: 'Deadline Approaching',
    message: 'Estimated resolution date for CVC2024004 is approaching in 3 days.',
    timestamp: new Date('2024-01-19T09:00:00'),
    read: true,
  },
  {
    id: 'NOT004',
    type: 'urgent',
    title: 'Priority Upgrade',
    message: 'Your water supply complaint has been upgraded to urgent priority.',
    timestamp: new Date('2024-01-16T09:30:00'),
    read: true,
  },
];

export const mockAnalytics = {
  complaintsByDepartment: [
    { department: 'Water Supply', count: 245, resolved: 189 },
    { department: 'Electricity', count: 312, resolved: 256 },
    { department: 'Roads', count: 178, resolved: 134 },
    { department: 'Sanitation', count: 156, resolved: 142 },
    { department: 'Health', count: 89, resolved: 78 },
    { department: 'Police', count: 67, resolved: 54 },
  ],
  complaintsByCategory: [
    { category: 'Infrastructure', count: 456 },
    { category: 'Public Services', count: 312 },
    { category: 'Health & Safety', count: 234 },
    { category: 'Environment', count: 189 },
    { category: 'Transportation', count: 167 },
    { category: 'Utilities', count: 145 },
  ],
  monthlyTrend: [
    { month: 'Jan', complaints: 456, resolved: 398 },
    { month: 'Feb', complaints: 523, resolved: 478 },
    { month: 'Mar', complaints: 489, resolved: 434 },
    { month: 'Apr', complaints: 534, resolved: 490 },
    { month: 'May', complaints: 567, resolved: 512 },
    { month: 'Jun', complaints: 623, resolved: 578 },
  ],
  priorityDistribution: [
    { priority: 'Low', count: 234, percentage: 18 },
    { priority: 'Medium', count: 567, percentage: 43 },
    { priority: 'High', count: 345, percentage: 26 },
    { priority: 'Urgent', count: 178, percentage: 13 },
  ],
  averageResolutionTime: 4.5,
  citizenSatisfaction: 87,
  totalComplaints: 1324,
  totalResolved: 1156,
  resolutionRate: 87.3,
};

export const officerStats = {
  complaintsAssigned: 45,
  complaintsResolved: 38,
  pendingCases: 7,
  averageResolutionTime: 3.2,
  citizenSatisfaction: 92,
  monthlyPerformance: [
    { month: 'Jan', resolved: 12, assigned: 14 },
    { month: 'Feb', resolved: 15, assigned: 13 },
    { month: 'Mar', resolved: 11, assigned: 16 },
    { month: 'Apr', resolved: 14, assigned: 15 },
    { month: 'May', resolved: 18, assigned: 14 },
    { month: 'Jun', resolved: 16, assigned: 15 },
  ],
  departmentComparison: [
    { department: 'This Officer', satisfaction: 92 },
    { department: 'Dept Average', satisfaction: 78 },
    { department: 'City Average', satisfaction: 71 },
  ],
};

export const transparencyData = {
  totalComplaints: 15678,
  totalResolved: 14234,
  resolutionRate: 90.8,
  topCategories: [
    { category: 'Water Supply', count: 3456 },
    { category: 'Electricity', count: 2987 },
    { category: 'Roads', count: 2543 },
    { category: 'Sanitation', count: 2134 },
    { category: 'Public Health', count: 1876 },
  ],
  bestDepartments: [
    { department: 'Public Health', rating: 94 },
    { department: 'Sanitation', rating: 91 },
    { department: 'Education', rating: 89 },
    { department: 'Electricity', rating: 87 },
    { department: 'Water Supply', rating: 84 },
  ],
};
