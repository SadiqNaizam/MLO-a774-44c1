import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SocialLoginButton from '@/components/SocialLoginButton'; // Custom component
import { Mail, Lock, AlertCircle, Github, Chrome } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('user@example.com'); // Default credentials
  const [password, setPassword] = useState('password'); // Default credentials
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log('Login attempt:', { email, password, rememberMe });

    // Simulate API call
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password') {
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
        console.log('Login failed');
      }
      setLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Attempting login with ${provider}`);
    // Placeholder for social login logic
    // For now, simulate success and navigate to dashboard
    setLoading(true);
    setTimeout(() => {
        console.log(`${provider} login successful (simulated)`);
        navigate('/dashboard');
        setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
          <CardDescription>Sign in to continue to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember-me" className="text-sm font-normal">Remember me</Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-800 px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2">
             <SocialLoginButton
                providerName="Google"
                icon={<Chrome className="h-5 w-5" />}
                onClick={() => handleSocialLogin('Google')}
                variant="outline"
             />
             <SocialLoginButton
                providerName="GitHub"
                icon={<Github className="h-5 w-5" />}
                onClick={() => handleSocialLogin('GitHub')}
                variant="outline"
            />
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p>Don't have an account? <Link to="/register" className="text-blue-600 hover:underline font-medium">Sign Up</Link></p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;