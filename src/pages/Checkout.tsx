import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ChevronDown, 
  Check,
  ArrowLeft,
  Lock,
  Building2,
  Mail,
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe - Replace with your actual publishable key
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');

// Plan interface
interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  color: string;
}

// Stripe Card Element styles
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#111827',
      fontFamily: 'Outfit, system-ui, sans-serif',
      '::placeholder': {
        color: '#9CA3AF',
      },
    },
    invalid: {
      color: '#EF4444',
    },
  },
};

interface CheckoutFormProps {
  currentPlan: Plan;
  isBusiness: boolean;
  monthlyPrice: number;
  vat: number;
  totalPrice: number;
}

function CheckoutForm({ 
  currentPlan,
  isBusiness,
  monthlyPrice,
  vat,
  totalPrice 
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      // Get the CardElement
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        throw new Error('Card element not found');
      }

      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setErrorMessage(error.message || t('checkout.errorOccurred'));
        setIsProcessing(false);
        return;
      }

      // Here you would send the paymentMethod.id to your backend
      // to create a subscription with Stripe Billing
      // Example:
      // const response = await fetch('/api/create-subscription', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     paymentMethodId: paymentMethod.id,
      //     planId: currentPlan.id,
      //     isBusiness: isBusiness
      //   })
      // });
      
      // Payment method created successfully
      // In production, send paymentMethod.id to your backend

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Redirect to success page or dashboard
      navigate('/success');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrorMessage(errorMessage);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Payment Method Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CreditCard className="text-blue-600" size={20} />
          </div>
          <div>
            <h3 className="text-gray-900">{t('checkout.paymentMethod')}</h3>
            <p className="text-sm text-gray-500">{t('checkout.securePayment')}</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Stripe Card Element */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              {t('checkout.cardDetails')}
            </label>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors bg-white">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>
          </div>

          {errorMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-sm text-red-600">{errorMessage}</p>
            </motion.div>
          )}

          {/* Security Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
            <Lock size={16} className="text-gray-500" />
            <span>{t('checkout.secureBadge')}</span>
          </div>
        </div>
      </motion.div>

      {/* Subscribe Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-orange-500 disabled:hover:to-orange-600 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        <div className="relative flex items-center justify-center gap-2">
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>{t('checkout.processing')}</span>
            </>
          ) : (
            <>
              <Lock size={20} />
              <span>{t('checkout.subscribe')}</span>
            </>
          )}
        </div>
      </motion.button>
    </form>
  );
}

// Countries list with flags
const COUNTRIES = [
  { flag: '🇵🇹', name: 'Portugal', code: 'PT' },
  { flag: '🇧🇷', name: 'Brasil', code: 'BR' },
  { flag: '🇪🇸', name: 'Espanha', code: 'ES' },
  { flag: '🇫🇷', name: 'França', code: 'FR' },
  { flag: '🇮🇹', name: 'Itália', code: 'IT' },
  { flag: '🇩🇪', name: 'Alemanha', code: 'DE' },
  { flag: '🇬🇧', name: 'Reino Unido', code: 'GB' },
  { flag: '🇺🇸', name: 'Estados Unidos', code: 'US' },
  { flag: '🇨🇦', name: 'Canadá', code: 'CA' },
  { flag: '🇦🇺', name: 'Austrália', code: 'AU' },
  { flag: '🇳🇱', name: 'Países Baixos', code: 'NL' },
  { flag: '🇧🇪', name: 'Bélgica', code: 'BE' },
  { flag: '🇨🇭', name: 'Suíça', code: 'CH' },
  { flag: '🇦🇹', name: 'Áustria', code: 'AT' },
  { flag: '🇸🇪', name: 'Suécia', code: 'SE' },
  { flag: '🇳🇴', name: 'Noruega', code: 'NO' },
  { flag: '🇩🇰', name: 'Dinamarca', code: 'DK' },
  { flag: '🇫🇮', name: 'Finlândia', code: 'FI' },
  { flag: '🇵🇱', name: 'Polónia', code: 'PL' },
  { flag: '🇬🇷', name: 'Grécia', code: 'GR' },
  { flag: '🇮🇪', name: 'Irlanda', code: 'IE' },
  { flag: '🇨🇿', name: 'República Checa', code: 'CZ' },
  { flag: '🇭🇺', name: 'Hungria', code: 'HU' },
  { flag: '🇷🇴', name: 'Roménia', code: 'RO' },
  { flag: '🇧🇬', name: 'Bulgária', code: 'BG' },
  { flag: '🇸🇰', name: 'Eslováquia', code: 'SK' },
  { flag: '🇸🇮', name: 'Eslovénia', code: 'SI' },
  { flag: '🇭🇷', name: 'Croácia', code: 'HR' },
  { flag: '🇲🇽', name: 'México', code: 'MX' },
  { flag: '🇦🇷', name: 'Argentina', code: 'AR' },
  { flag: '🇨🇱', name: 'Chile', code: 'CL' },
  { flag: '🇨🇴', name: 'Colômbia', code: 'CO' },
  { flag: '🇵🇪', name: 'Peru', code: 'PE' },
  { flag: '🇿🇦', name: 'África do Sul', code: 'ZA' },
  { flag: '🇯🇵', name: 'Japão', code: 'JP' },
  { flag: '🇰🇷', name: 'Coreia do Sul', code: 'KR' },
  { flag: '🇨🇳', name: 'China', code: 'CN' },
  { flag: '🇮🇳', name: 'Índia', code: 'IN' },
  { flag: '🇸🇬', name: 'Singapura', code: 'SG' },
  { flag: '🇳🇿', name: 'Nova Zelândia', code: 'NZ' },
];

export function Checkout() {
  const { planId } = useParams<{ planId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [isBusiness, setIsBusiness] = useState(false);

  // Get billing cycle from URL, default to 'monthly'
  const billingCycle = (searchParams.get('cycle') || 'monthly') as 'monthly' | 'annual';

  // Plan data with both monthly and annual prices
  const planData: Record<string, { name: string; monthlyPrice: number; annualPrice: number; color: string }> = {
    starter: {
      name: t('selectPlan.starter'),
      monthlyPrice: 7.99,
      annualPrice: 6.87, // 14% discount
      color: 'from-blue-500 to-blue-600',
    },
    growth: {
      name: t('selectPlan.growth'),
      monthlyPrice: 15.99,
      annualPrice: 13.75, // 14% discount
      color: 'from-purple-500 to-purple-600',
    },
    pro: {
      name: t('selectPlan.pro'),
      monthlyPrice: 24.99,
      annualPrice: 21.49, // 14% discount
      color: 'from-orange-500 to-orange-600',
    },
    enterprise: {
      name: t('selectPlan.unlimited'),
      monthlyPrice: 99,
      annualPrice: 85.05, // 14% discount
      color: 'from-gray-800 to-gray-900',
    },
  };

  const currentPlan = planData[planId || 'pro'];
  const basePrice = billingCycle === 'monthly' ? currentPlan.monthlyPrice : currentPlan.annualPrice;
  const pricePerMonth = basePrice;
  const vat = pricePerMonth * 0.23;
  const totalPrice = pricePerMonth + vat;

  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative pt-8 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-300 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>{t('common.back')}</span>
            </motion.button>

            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-gray-900 mb-3">{t('checkout.title')}</h1>
              <p className="text-gray-600">{t('checkout.subtitle')}</p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Side - Form */}
              <div className="lg:col-span-3 space-y-5">
                {/* Billing Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Building2 className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h3 className="text-gray-900">{t('checkout.billingInfo')}</h3>
                      <p className="text-sm text-gray-500">{t('checkout.billingInfoDesc')}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.fullName')}</label>
                      <input
                        type="text"
                        placeholder={t('checkout.fullNamePlaceholder')}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.country')}</label>
                        <div className="relative">
                          <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 appearance-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all">
                            {COUNTRIES.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.flag} {country.name}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.postalCode')}</label>
                        <input
                          type="text"
                          placeholder={t('checkout.postalCodePlaceholder')}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.address')}</label>
                      <input
                        type="text"
                        placeholder={t('checkout.addressPlaceholder')}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="pt-3">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={isBusiness}
                          onChange={(e) => setIsBusiness(e.target.checked)}
                          className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none cursor-pointer transition-all"
                        />
                        <div>
                          <span className="text-gray-900 group-hover:text-orange-600 transition-colors">{t('checkout.businessPurchase')}</span>
                          <p className="text-xs text-gray-500 mt-0.5">{t('checkout.businessPurchaseDesc')}</p>
                        </div>
                      </label>
                    </div>

                    {/* VAT Information */}
                    <AnimatePresence>
                      {isBusiness && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 pt-4 border-t border-gray-200 overflow-hidden"
                        >
                          <div>
                            <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.businessName')}</label>
                            <input
                              type="text"
                              placeholder={t('checkout.businessNamePlaceholder')}
                              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.vatCountry')}</label>
                              <div className="relative">
                                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 appearance-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all">
                                  {COUNTRIES.map((country) => (
                                    <option key={country.code} value={country.code}>
                                      {country.flag} {country.name}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.vatNumber')}</label>
                              <input
                                type="text"
                                placeholder={t('checkout.vatNumberPlaceholder')}
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Contact Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Mail className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h3 className="text-gray-900">{t('checkout.contact')}</h3>
                      <p className="text-sm text-gray-500">{t('checkout.contactDesc')}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">{t('checkout.email')}</label>
                    <input
                      type="email"
                      placeholder={t('checkout.emailPlaceholder')}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                    />
                  </div>
                </motion.div>

                {/* Stripe Payment Form */}
                <CheckoutForm
                  currentPlan={currentPlan}
                  isBusiness={isBusiness}
                  monthlyPrice={pricePerMonth}
                  vat={vat}
                  totalPrice={totalPrice}
                />
              </div>

              {/* Right Side - Summary */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-8"
                >
                  <h3 className="text-gray-900 mb-6">{t('checkout.summary')}</h3>

                  {/* Billing Cycle Badge */}
                  {billingCycle === 'annual' && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-700 font-medium">
                        {t('selectPlan.annual')} - {t('selectPlan.saveUpTo')}
                      </p>
                    </div>
                  )}

                  {/* Price Breakdown */}
                  <div className="space-y-4 pb-6 mb-6 border-b border-gray-200">
                    <div className="flex justify-between text-gray-600">
                      <span>{t('checkout.plan')} {currentPlan.name}</span>
                      <span>€{basePrice.toFixed(2)} {billingCycle === 'monthly' ? `/${t('pricing.month')}` : `/${t('pricing.year')}`}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>{t('checkout.vat')}</span>
                      <span>€{vat.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                    <span className="text-gray-900">
                      {billingCycle === 'monthly' ? t('checkout.totalMonthly') : t('checkout.totalAnnual')}
                    </span>
                    <span className="text-gray-900">€{totalPrice.toFixed(2)}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-3">{t('checkout.included')}</p>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-2.5 text-sm text-gray-700">
                        <Check className="text-green-500 flex-shrink-0" size={16} />
                        <span>{t('checkout.unlimitedStamps')}</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-700">
                        <Check className="text-green-500 flex-shrink-0" size={16} />
                        <span>{t('checkout.unlimitedPush')}</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-700">
                        <Check className="text-green-500 flex-shrink-0" size={16} />
                        <span>{t('checkout.prioritySupport')}</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-gray-700">
                        <Check className="text-green-500 flex-shrink-0" size={16} />
                        <span>{t('checkout.cancelAnytime')}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={14} className="text-green-500" />
                    <span>Pagamento 100% seguro com SSL</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
}
