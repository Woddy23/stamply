import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Como Podemos Ajudar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entre em contacto conosco e nossa equipe responderá o mais breve possível
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all">
            <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-4">
              <Mail className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-3 text-sm">Resposta em até 24 horas</p>
            <a href="mailto:support@stamply.com" className="text-orange-600 hover:text-orange-700">
              support@stamply.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all">
            <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-4">
              <Phone className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Telefone</h3>
            <p className="text-gray-600 mb-3 text-sm">Seg-Sex das 9h às 18h</p>
            <a href="tel:+15551234567" className="text-orange-600 hover:text-orange-700">
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition-colors"
          >
            Enviar Mensagem
          </Link>
        </div>
      </div>
    </section>
  );
}