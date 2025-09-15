import React from 'react';
const date = new Date()
const year = date.getFullYear()
function Footer() {
  return (
    <footer className="border-t border-border-color py-8">
      <div className="container mx-auto text-center text-standard-gray text-sm">
        <p>&copy; {year} Luiz Felipe. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;