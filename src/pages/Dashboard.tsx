import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Plus,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Users,
  DollarSign,
  Activity,
  Eye,
  MoreHorizontal,
  ArrowRight,
  Bell,
  Download,
  Filter,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState("7days");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Transition Section */}
      <section className="py-12 bg-gradient-hero border-b">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to your Competitor Intelligence Dashboard
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Monitor market share, pricing, and growth strategies in real time.
            </p>
            <Button variant="hero" size="lg" className="mb-4">
              <Plus className="mr-2 h-5 w-5" />
              Add First Competitor
            </Button>
            <p className="text-sm text-muted-foreground">
              Start tracking competitors instantly
            </p>
          </div>
        </div>
      </section>

      {/* Competitor KPIs Overview */}
      <section className="py-12">
        <div className="container px-4">
          <h2 className="text-2xl font-bold mb-8">Competitor Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiCards.map((kpi, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kpi.bgColor}`}>
                      <kpi.icon className={`h-5 w-5 ${kpi.iconColor}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {kpi.change}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{kpi.value}</h3>
                    <p className="text-sm text-muted-foreground">{kpi.title}</p>
                    <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                      View Detailed Analytics <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Live Updates</span>
                    <Badge variant="outline">
                      <Activity className="mr-1 h-3 w-3" />
                      Live
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {activityFeed.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 ${getSeverityColor(activity.severity)}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.competitor}</p>
                          <p className="text-sm text-muted-foreground">{activity.event}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {activity.severity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Actions & Mentions</h2>
              <div className="space-y-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {quickActions.map((action, index) => (
                        <Button key={index} variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                          <action.icon className="h-5 w-5" />
                          <span className="text-xs text-center">{action.label}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle>Top Mentions Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {topMentions.map((mention, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{mention.competitor}</span>
                          <Badge variant="secondary">{mention.count} mentions</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Analytics & Visualizations */}
      <section className="py-12">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Analytics & Insights</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                {timeFilter === "7days" ? "Last 7 days" : timeFilter === "30days" ? "Last 30 days" : "YTD"}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsCharts.map((chart, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <chart.icon className="h-5 w-5" />
                    <span>{chart.title}</span>
                  </CardTitle>
                  <CardDescription>{chart.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg">
                    <p className="text-muted-foreground">Chart visualization - {chart.title}</p>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {chart.insight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitored Competitors */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Monitored Competitors</h2>
            <Button variant="default">
              <Plus className="mr-2 h-4 w-4" />
              Add Competitor
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoredCompetitors.map((competitor, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {competitor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{competitor.name}</h3>
                        <Badge variant={competitor.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                          {competitor.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last updated:</span>
                      <span>{competitor.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Alerts:</span>
                      <Badge variant="outline">
                        {competitor.alerts} total, {competitor.newAlerts} new
                      </Badge>
                    </div>
                    <Separator />
                    <p className="text-xs text-muted-foreground">{competitor.description}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="mr-1 h-3 w-3" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA Footer */}
      <div className="sticky bottom-0 bg-background border-t shadow-lg z-10">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-medium">Upgrade to unlock full insights</span>
            </div>
            <Button variant="default">
              Upgrade Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data
const kpiCards = [
  {
    title: "Market Share",
    value: "23.5%",
    change: "+2.1%",
    icon: BarChart3,
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    title: "Growth Rate",
    value: "12.8%",
    change: "+0.5%",
    icon: TrendingUp,
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Customer Sentiment",
    value: "78%",
    change: "Positive",
    icon: Users,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Revenue Trends",
    value: "$2.1M",
    change: "+15.2%",
    icon: DollarSign,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

const activityFeed = [
  {
    competitor: "TechCorp",
    event: "Funding Announcement – raised $50M Series B",
    timestamp: "2 hours ago",
    severity: "High"
  },
  {
    competitor: "InnovateAI",
    event: "Pricing Change – Premium plan increased from $99 → $149",
    timestamp: "4 hours ago",
    severity: "Medium"
  },
  {
    competitor: "DataFlow",
    event: "New product launch announced on social media",
    timestamp: "6 hours ago",
    severity: "Medium"
  },
  {
    competitor: "CloudNext",
    event: "Hired 15 new engineers according to LinkedIn",
    timestamp: "1 day ago",
    severity: "Low"
  }
];

const quickActions = [
  { icon: Bell, label: "View News Feed" },
  { icon: DollarSign, label: "Check Pricing Changes" },
  { icon: Activity, label: "Social Media Updates" },
  { icon: BarChart3, label: "Generate Report" }
];

const topMentions = [
  { competitor: "TechCorp", count: 12 },
  { competitor: "InnovateAI", count: 8 },
  { competitor: "DataFlow", count: 5 },
  { competitor: "CloudNext", count: 3 }
];

const analyticsCharts = [
  {
    title: "Hiring Trends",
    description: "Monitor competitor hiring patterns",
    icon: Users,
    insight: "TechCorp has increased hiring by 45% this quarter, indicating rapid expansion."
  },
  {
    title: "Pricing Changes",
    description: "Track pricing strategy evolution",
    icon: DollarSign,
    insight: "Average competitor pricing has increased 12% across the market in the last 30 days."
  },
  {
    title: "Funding & Expenses",
    description: "Financial movement analysis",
    icon: TrendingUp,
    insight: "Series B funding rounds are up 23% compared to last quarter."
  },
  {
    title: "Feature Releases",
    description: "Product development tracking",
    icon: BarChart3,
    insight: "AI-related features dominate 68% of new product announcements this month."
  }
];

const monitoredCompetitors = [
  {
    name: "TechCorp Inc",
    status: "Active",
    lastUpdated: "3h ago",
    alerts: 12,
    newAlerts: 3,
    description: "TechCorp is being monitored for pricing and growth trends. Latest activity: New hiring in Q3."
  },
  {
    name: "InnovateAI",
    status: "Active",
    lastUpdated: "5h ago",
    alerts: 8,
    newAlerts: 1,
    description: "AI-focused competitor with recent product launches and competitive pricing strategies."
  },
  {
    name: "DataFlow Systems",
    status: "Monitoring",
    lastUpdated: "1d ago",
    alerts: 15,
    newAlerts: 5,
    description: "Enterprise data platform competitor with significant market presence and funding activity."
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High": return "bg-red-500";
    case "Medium": return "bg-yellow-500";
    case "Low": return "bg-green-500";
    default: return "bg-gray-500";
  }
};

export default Dashboard;