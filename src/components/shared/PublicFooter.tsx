import {
  Facebook,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

function PublicFooter() {
  return (
    // <footer className="border-t bg-background">
    //   <div className="container mx-auto px-4 py-8">
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    //       <div>
    //         <h3 className="font-bold mb-2">PH Doc</h3>
    //         <p className="text-sm text-muted-foreground">
    //           Your health is our priority. We are here to provide the best
    //           medical services.
    //         </p>
    //       </div>
    //       <div>
    //         <h3 className="font-semibold mb-2">Quick Links</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               About Us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="font-semibold mb-2">Support</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               FAQ
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               Help Center
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               Terms of Service
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground hover:text-foreground"
    //             >
    //               Privacy Policy
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="font-semibold mb-2">Contact Us</h3>
    //         <p className="text-sm text-muted-foreground">
    //           123 Medical Lane
    //           <br />
    //           Health City, HC 12345
    //           <br />
    //           contact@phdoc.com
    //         </p>
    //       </div>
    //     </div>
    //     <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
    //       &copy; {new Date().getFullYear()} PH Doc. All Rights Reserved.
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-lg">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SR Care</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing world-class healthcare services online. Accessible,
              affordable, and professional care for everyone, everywhere.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="hover:text-white transition-colors"
                >
                  Find a Doctor
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>General Consultation</li>
              <li>Cardiology Support</li>
              <li>Pediatric Care</li>
              <li>Mental Health</li>
              <li>Lab Reports</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Health Valley, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@srcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SR Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default PublicFooter;
