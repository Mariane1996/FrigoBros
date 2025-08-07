import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, TriangleAlert } from "lucide-react";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Email invalide").optional().or(z.literal("")),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const commercialForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: "commercial",
      name: "",
      email: "",
      phone: "",
      company: "",
      establishmentType: "",
      serviceType: "",
      city: "",
      description: "",
    },
  });

  const residentialForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: "residential",
      name: "",
      email: "",
      phone: "",
      company: "",
      establishmentType: "",
      serviceType: "",
      city: "",
      description: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons rapidement pour étudier votre projet.",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande.",
      });
    },
  });

  const onCommercialSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
    commercialForm.reset();
  };

  const onResidentialSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
    residentialForm.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="from-cefco-blue to-blue-700 text-white py-20 bg-[#111827]" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Que vous soyez un professionnel ou un particulier, nous sommes là pour répondre à vos besoins
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-white" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <Card className="lg:col-span-1" data-testid="contact-info">
              <CardHeader>
                <CardTitle className="text-2xl">Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-cefco-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <p className="text-gray-600">01 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-cefco-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contact@cefco.fr</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-cefco-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Zone d'intervention</p>
                    <p className="text-gray-600">Île-de-France et régions limitrophes</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-red-50 p-4 rounded-lg">
                  <div className="bg-cefco-red text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <TriangleAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Urgences 24h/7j</p>
                    <p className="text-cefco-red font-semibold">06 12 34 56 78</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Horaires d'ouverture</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Lundi - Vendredi : 8h00 - 18h00</p>
                    <p>Samedi : 8h00 - 12h00</p>
                    <p>Dimanche : Urgences uniquement</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Form */}
            <Card data-testid="commercial-form">
              <CardHeader>
                <CardTitle className="text-2xl text-cefco-blue">Demande Commerciale</CardTitle>
                <p className="text-gray-600">Pour boulangeries, supermarchés, restaurants</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={commercialForm.handleSubmit(onCommercialSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="commercial-establishment">Type d'établissement *</Label>
                    <Select
                      onValueChange={(value) => commercialForm.setValue("establishmentType", value)}
                      defaultValue=""
                    >
                      <SelectTrigger id="commercial-establishment" data-testid="commercial-establishment-select">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="boulangerie">Boulangerie</SelectItem>
                        <SelectItem value="patisserie">Pâtisserie</SelectItem>
                        <SelectItem value="supermarche">Supermarché</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="hotel">Hôtel</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="commercial-company">Nom de l'entreprise *</Label>
                    <Input
                      id="commercial-company"
                      {...commercialForm.register("company")}
                      placeholder="Votre entreprise"
                      data-testid="commercial-company-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="commercial-name">Contact *</Label>
                    <Input
                      id="commercial-name"
                      {...commercialForm.register("name")}
                      placeholder="Votre nom"
                      data-testid="commercial-name-input"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="commercial-phone">Téléphone *</Label>
                    <Input
                      id="commercial-phone"
                      type="tel"
                      {...commercialForm.register("phone")}
                      placeholder="Votre numéro"
                      data-testid="commercial-phone-input"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="commercial-email">Email</Label>
                    <Input
                      id="commercial-email"
                      type="email"
                      {...commercialForm.register("email")}
                      placeholder="votre@email.com"
                      data-testid="commercial-email-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="commercial-description">Description du projet *</Label>
                    <Textarea
                      id="commercial-description"
                      {...commercialForm.register("description")}
                      placeholder="Décrivez votre besoin..."
                      rows={3}
                      data-testid="commercial-description-textarea"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cefco-blue hover:bg-blue-800"
                    disabled={submitContactMutation.isPending}
                    data-testid="commercial-submit-button"
                  >
                    {submitContactMutation.isPending ? "Envoi..." : "Demander un devis commercial"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Residential Form */}
            <Card data-testid="residential-form">
              <CardHeader>
                <CardTitle className="text-2xl text-cefco-green">Demande Résidentielle</CardTitle>
                <p className="text-gray-600">Pour particuliers et logements</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={residentialForm.handleSubmit(onResidentialSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="residential-service">Type de service *</Label>
                    <Select
                      onValueChange={(value) => residentialForm.setValue("serviceType", value)}
                      defaultValue=""
                    >
                      <SelectTrigger id="residential-service" data-testid="residential-service-select">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="installation-climatisation">Installation climatisation</SelectItem>
                        <SelectItem value="reparation-climatisation">Réparation climatisation</SelectItem>
                        <SelectItem value="maintenance-preventive">Maintenance préventive</SelectItem>
                        <SelectItem value="depannage-urgence">Dépannage d'urgence</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="residential-name">Nom *</Label>
                    <Input
                      id="residential-name"
                      {...residentialForm.register("name")}
                      placeholder="Votre nom"
                      data-testid="residential-name-input"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="residential-phone">Téléphone *</Label>
                    <Input
                      id="residential-phone"
                      type="tel"
                      {...residentialForm.register("phone")}
                      placeholder="Votre numéro"
                      data-testid="residential-phone-input"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="residential-email">Email</Label>
                    <Input
                      id="residential-email"
                      type="email"
                      {...residentialForm.register("email")}
                      placeholder="votre@email.com"
                      data-testid="residential-email-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="residential-city">Ville *</Label>
                    <Input
                      id="residential-city"
                      {...residentialForm.register("city")}
                      placeholder="Votre ville"
                      data-testid="residential-city-input"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="residential-description">Description *</Label>
                    <Textarea
                      id="residential-description"
                      {...residentialForm.register("description")}
                      placeholder="Décrivez votre problème ou besoin..."
                      rows={3}
                      data-testid="residential-description-textarea"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cefco-green hover:bg-green-700"
                    disabled={submitContactMutation.isPending}
                    data-testid="residential-submit-button"
                  >
                    {submitContactMutation.isPending ? "Envoi..." : "Demander une intervention"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
