import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, LogOut, MessageSquare, User } from 'lucide-react';
import { MedicalChatbot } from '@/components/MedicalChatbot';
import { supabase } from '@/integrations/supabase/client';

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-primary"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-medical-light to-tech-light">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-medical-primary" />
            <div>
              <h1 className="text-xl font-bold">DiagMind.AI</h1>
              <p className="text-sm text-muted-foreground">Dashboard Médical</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                {profile?.full_name || user.email}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <Card className="p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">
              Bienvenue, {profile?.full_name || 'Docteur'} 👋
            </h2>
            <p className="text-muted-foreground mb-6">
              Utilisez l'assistant IA pour vous aider dans vos diagnostics médicaux.
              Posez vos questions sur l'imagerie cérébrale et les tumeurs.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-medical-light/50">
                <h3 className="font-semibold mb-1">Rôle</h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {profile?.role || 'utilisateur'}
                </p>
              </Card>
              <Card className="p-4 bg-tech-light/50">
                <h3 className="font-semibold mb-1">Statut</h3>
                <p className="text-sm text-success">Connecté ✓</p>
              </Card>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="font-bold mb-4">Actions rapides</h3>
            <div className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant={showChat ? "default" : "outline"}
                onClick={() => setShowChat(true)}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Ouvrir le chatbot IA
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Brain className="h-4 w-4 mr-2" />
                Historique des analyses
              </Button>
            </div>
          </Card>
        </div>

        {/* Chatbot Section */}
        {showChat && (
          <div className="mt-8">
            <MedicalChatbot onClose={() => setShowChat(false)} />
          </div>
        )}
      </main>
    </div>
  );
}