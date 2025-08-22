// app/api/send-devis/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    console.log('📧 Données reçues:', formData);
    
    // Formater les données pour l'email
    const emailData = {
      to_email: 'younesbennaceur2004@gmail.com',
      from_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
      client_email: formData.email || '',
      client_phone: formData.phone || '',
      
      // Informations du bien
      client_type: formData.clientType || '',
      property_type: formData.propertyType || '',
      ownership_status: formData.ownershipStatus || '',
      postal_code: formData.postalCode || '',
      
      // Caractéristiques
      construction_date: formData.constructionDate || '',
      habitable_surface: formData.habitableSurface || '',
      energy_diagnostic: formData.energyDiagnostic || '',
      
      // Projet de rénovation
      renovation_motivations: Array.isArray(formData.renovationMotivations) 
        ? formData.renovationMotivations.join(', ') 
        : (formData.renovationMotivations || ''),
      renovation_types: Array.isArray(formData.renovationTypes)
        ? formData.renovationTypes.join(', ')
        : (formData.renovationTypes || ''),
      work_timeline: formData.workTimeline || '',
      
      // Chauffage
      heating_type: formData.heatingType || '',
      heating_source: formData.heatingSource || '',
      water_heating_type: formData.waterHeatingType || '',
      water_heating_method: formData.waterHeatingMethod || '',
      
      // Isolation
      building_floors: formData.buildingFloors || '',
      shared_walls: formData.sharedWalls || '',
      wall_insulation_work: formData.wallInsulationWork || '',
      single_glazing_windows: formData.singleGlazingWindows || '',
      
      // Aides
      household_size: formData.householdSize || '',
      fiscal_income: formData.fiscalIncome || '',
      
      // Newsletter
      newsletter: formData.newsletter ? 'Oui' : 'Non',
      subscribe: formData.subscribe ? 'Oui' : 'Non'
    };

    console.log('📤 Données formatées pour EmailJS:', emailData);

    // Configuration EmailJS
    const emailConfig = {
      serviceId: 'service_ge79rzl',
      templateId: 'template_9bu4zhf',
      publicKey: 'wX6VSHJMbAH2gpRao'
    };

    console.log('✅ Configuration EmailJS prête');

    return NextResponse.json({
      success: true,
      sendEmail: true,
      emailData,
      emailConfig,
      message: 'Données préparées pour l\'envoi d\'email'
    });

  } catch (error) {
    console.error('❌ Erreur dans l\'API:', error);
    return NextResponse.json({ 
      error: 'Erreur interne du serveur',
      details: error.message 
    }, { status: 500 });
  }
}

// Pour les autres méthodes HTTP
export async function GET() {
  return NextResponse.json({ 
    message: 'API send-devis fonctionnelle',
    status: 'OK'
  });
}