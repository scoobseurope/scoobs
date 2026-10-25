// =====================================================================
//  Configuração da loja — o único ficheiro que precisas de editar.
//  Enquanto supabaseUrl estiver vazio, o site corre em MODO DEMONSTRAÇÃO
//  (os dados ficam só no teu browser e nada é enviado).
// =====================================================================
window.LOJA_CONFIG = {
  // Supabase → Project Settings → API
  supabaseUrl: "",        // ex.: "https://abcdefgh.supabase.co"
  supabaseAnonKey: "",    // a chave "anon public" (pode estar à vista, é pública)

  // EmailJS → envia o email com o número de encomenda e os dados de pagamento
  emailjs: {
    publicKey: "",        // Account → General → Public Key
    serviceId: "",        // Email Services → o teu serviço Gmail
    templateId: ""        // Email Templates → o modelo "Encomenda"
  },

  // Dados que aparecem nos Termos e na Política de Privacidade
  legal: {
    titular: "",          // nome do empresário em nome individual
    nif: "",
    morada: "",           // morada fiscal
    email: ""             // email de contacto para clientes
  }
};
