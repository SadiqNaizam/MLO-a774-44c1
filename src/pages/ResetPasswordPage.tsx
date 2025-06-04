import React, { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, AlertCircle, CheckCircle } from 'lucide-react';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams<{ token?: string }>(); // Example: if token is in URL

  console.log('ResetPasswordPage loaded. Token (if any):', token);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords don't match. Please try again.");
      setLoading(false);
      return;
    }
    console.log('Reset password attempt with new password.');

    // Simulate API call
    setTimeout(() => {
      setMessage('Your password has been successfully reset! You can now log in with your new password.');
      console.log('Password reset successful (simulated)');
      setLoading(false);
      // setTimeout(() => navigate('/login'), 3000); // Redirect after a delay
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Set New Password</CardTitle>
          <CardDescription>Please enter and confirm your new password.</CardDescription>
        </CardHeader>
        <CardContent>
          {message && (
            <Alert variant="default" className="mb-4 bg-green-50 dark:bg-green-900 border-green-300 dark:border-green-700">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertDescription className="text-green-700 dark:text-green-300">{message}</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {!message && ( // Hide form if success message is shown
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Setting Password...' : 'Set New Password'}
              </Button>
            </form>
          )}
        </CardContent>
        {message && (
            <CardFooter className="text-center text-sm">
                 <Link to="/login" className="text-blue-600 hover:underline font-medium w-full">
                    <Button variant="outline" className="w-full">Back to Login</Button>
                 </Link>
            </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ResetPasswordPage;