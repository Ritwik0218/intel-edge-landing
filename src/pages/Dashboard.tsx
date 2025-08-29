import { useState, useEffect } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [kpiCards, setKpiCards] = useState([]);
  const [activityFeed, setActivityFeed] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [topMentions, setTopMentions] = useState([]);
  const [analyticsCharts, setAnalyticsCharts] = useState([]);
  const [monitoredCompetitors, setMonitoredCompetitors] = useState([]);

  useEffect(() => {
    // Fetch data dynamically (replace with actual API calls)
    const fetchData = async () => {
      const kpiData = await fetch("/api/kpi-cards").then(res => res.json());
      const activityData = await fetch("/api/activity-feed").then(res => res.json());
      const quickActionsData = await fetch("/api/quick-actions").then(res => res.json());
      const mentionsData = await fetch("/api/top-mentions").then(res => res.json());
      const chartsData = await fetch("/api/analytics-charts").then(res => res.json());
      const competitorsData = await fetch("/api/monitored-competitors").then(res => res.json());

      setKpiCards(kpiData);
      setActivityFeed(activityData);
      setQuickActions(quickActionsData);
      setTopMentions(mentionsData);
      setAnalyticsCharts(chartsData);
      setMonitoredCompetitors(competitorsData);
    };

    fetchData();
  }, []);

  function getSeverityColor(severity: string) {
    switch (severity) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-1/5`}
      >
        <div className="flex flex-col h-full">
          {/* Logo + Name */}
          <div className="p-4 bg-gradient-to-r from-primary to-secondary text-white text-center font-bold text-lg">
            <a href="/" className="block">nirixion</a>
          </div>
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-1 p-4">
              <li>
                <a href="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-100">
                  🏠 <span className="ml-2">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/news-monitor" className="flex items-center p-2 rounded hover:bg-gray-100">
                  📰 <span className="ml-2">News Monitor</span>
                </a>
              </li>
              <li>
                <a href="/website-changes" className="flex items-center p-2 rounded hover:bg-gray-100">
                  👁️ <span className="ml-2">Website Changes</span>
                </a>
              </li>
              <li>
                <a href="/job-postings" className="flex items-center p-2 rounded hover:bg-gray-100">
                  💼 <span className="ml-2">Job Postings</span>
                </a>
              </li>
              <li>
                <a href="/social-media" className="flex items-center p-2 rounded hover:bg-gray-100">
                  💬 <span className="ml-2">Social Media</span>
                </a>
              </li>
              <li>
                <a href="/pricing-changes" className="flex items-center p-2 rounded hover:bg-gray-100">
                  💲 <span className="ml-2">Pricing Changes</span>
                </a>
              </li>
              <li>
                <a href="/analytics" className="flex items-center p-2 rounded hover:bg-gray-100">
                  📊 <span className="ml-2">Analytics</span>
                </a>
              </li>
              <li className="mt-4 border-t pt-4">
                <a href="/alerts" className="flex items-center p-2 rounded hover:bg-gray-100">
                  🔔 <span className="ml-2">Alerts</span>
                </a>
              </li>
              <li>
                <a href="/settings" className="flex items-center p-2 rounded hover:bg-gray-100">
                  ⚙️ <span className="ml-2">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-0 md:ml-[20%]">
        {/* Sticky Header */}
        <header className="sticky top-0 z-10 bg-white shadow-md">
          <div className="container px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Welcome to Your Competitor Dashboard</h1>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-2 text-sm w-1/3"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4">
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;