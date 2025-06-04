import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings, LayoutDashboard } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  console.log('DashboardPage loaded');

  const handleLogout = () => {
    console.log('User logging out');
    // Perform logout actions (e.g., clear token, state)
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <RouterLink to="/dashboard">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <LayoutDashboard className="h-5 w-5 mr-2" /> Dashboard
                  </NavigationMenuLink>
                </RouterLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                 <RouterLink to="/dashboard/settings"> {/* Example link */}
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Settings className="h-5 w-5 mr-2" /> Settings
                    </NavigationMenuLink>
                 </RouterLink>
              </NavigationMenuItem>
              {/* Add more navigation items here */}
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">User Example</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex-1 p-6 container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Main Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Welcome!</CardTitle>
              <CardDescription>This is your main application dashboard.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Here you can see an overview of your activities, manage settings, and access various features.
                This is a placeholder content area.
              </p>
              <img src="https://source.unsplash.com/random/400x200?office,desk" alt="Office desk" className="mt-4 rounded-md shadow-md" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Some key metrics at a glance.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Active Projects: <strong>5</strong></li>
                <li>Pending Tasks: <strong>12</strong></li>
                <li>Team Members: <strong>8</strong></li>
              </ul>
               <img src="https://source.unsplash.com/random/400x200?analytics,chart" alt="Analytics chart" className="mt-4 rounded-md shadow-md" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>What's new in your workspace.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                - New user 'Jane Doe' signed up. <br />
                - Project 'Alpha' milestone completed. <br />
                - System maintenance scheduled for tomorrow.
              </p>
               <img src="https://source.unsplash.com/random/400x200?workspace,team" alt="Workspace" className="mt-4 rounded-md shadow-md" />
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Button onClick={() => alert('Action button clicked!')}>Perform Action</Button>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardPage;