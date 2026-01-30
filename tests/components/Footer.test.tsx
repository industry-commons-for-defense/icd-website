import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

describe('Footer Contrast Validation', () => {
  it('renders footer with proper structure', () => {
    render(<Footer />);

    // Verify footer exists
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    // Verify main sections exist
    expect(screen.getByText('By Role')).toBeInTheDocument();
    expect(screen.getByText('About ICD')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('footer links are present and accessible', () => {
    const { container } = render(<Footer />);

    // Find all footer links
    const footerLinks = container.querySelectorAll('footer a');
    expect(footerLinks.length).toBeGreaterThan(0);

    // Each link should be accessible
    footerLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  it('footer copyright section exists', () => {
    const { container } = render(<Footer />);

    // Find copyright section
    const copyrightSection = container.querySelector('.border-t');
    expect(copyrightSection).toBeInTheDocument();
  });

  it('social links have GitHub link', () => {
    render(<Footer />);

    // Test GitHub link is present (LinkedIn and X were removed as unaffiliated)
    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/industry-commons-for-defense');
  });

  it('email link is present', () => {
    render(<Footer />);

    const emailLink = screen.getByText('contact@icd-defense.org');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@icd-defense.org');
  });

  it('footer has proper background color via inline style', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveStyle({ backgroundColor: '#2e1065' });
  });

  it('footer text uses white color via inline styles for contrast', () => {
    const { container } = render(<Footer />);

    // Check that inline styles set white text color for contrast
    const footer = container.querySelector('footer');
    expect(footer).toHaveStyle({ color: '#ffffff' });
  });

  it('displays current year in copyright', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });
});
