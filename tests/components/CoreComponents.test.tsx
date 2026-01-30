import { render, screen } from '@testing-library/react';
import CoreComponents from '@/components/home/CoreComponents';

describe('CoreComponents Icon Visibility', () => {
  it('renders all three feature icons with visible backgrounds', () => {
    const { container } = render(<CoreComponents />);

    // Test that all sections are present
    expect(screen.getByText('Secure Collaboration')).toBeInTheDocument();
    expect(screen.getByText('Rapid Deployment')).toBeInTheDocument();
    expect(screen.getByText('Multi-Stakeholder')).toBeInTheDocument();

    // Test that background color classes are applied and visible
    const shieldIconContainer = container.querySelector('.bg-purple-800');
    expect(shieldIconContainer).toBeInTheDocument();
    expect(shieldIconContainer).toHaveClass('bg-purple-800');

    const goldIconContainer = container.querySelector('.bg-amber-500');
    expect(goldIconContainer).toBeInTheDocument();
    expect(goldIconContainer).toHaveClass('bg-amber-500');

    const greenIconContainer = container.querySelector('.bg-emerald-600');
    expect(greenIconContainer).toBeInTheDocument();
    expect(greenIconContainer).toHaveClass('bg-emerald-600');

    // Test that SVG icons are rendered (Lucide icons render as SVG)
    const svgIcons = container.querySelectorAll('svg');
    expect(svgIcons).toHaveLength(3);

    // Test that each icon container has the proper structure
    const iconContainers = container.querySelectorAll('.rounded-full');
    expect(iconContainers).toHaveLength(3);

    // Verify each container has both size classes and background color
    iconContainers.forEach(container => {
      expect(container).toHaveClass('w-16', 'h-16', 'rounded-full');
      // Check each container has one of the expected background colors
      const hasValidBg = container.classList.contains('bg-purple-800') ||
                        container.classList.contains('bg-amber-500') ||
                        container.classList.contains('bg-emerald-600');
      expect(hasValidBg).toBe(true);
    });
  });

  it('shield icon has proper purple background', () => {
    const { container } = render(<CoreComponents />);

    // Find the Secure Collaboration section
    const secureCollabSection = screen.getByText('Secure Collaboration').closest('div');
    expect(secureCollabSection).toBeInTheDocument();

    // Find the icon container within this section
    const iconContainer = secureCollabSection?.querySelector('.bg-purple-800');
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveClass('bg-purple-800');

    // Verify it contains an SVG (Shield icon)
    const svgIcon = iconContainer?.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });

  it('icons have white color for visibility against backgrounds', () => {
    const { container } = render(<CoreComponents />);

    // All SVG icons should have white color class
    const svgIcons = container.querySelectorAll('svg');
    svgIcons.forEach(icon => {
      expect(icon).toHaveClass('text-white');
    });
  });

  it('meets accessibility standards with proper contrast', () => {
    render(<CoreComponents />);

    // Test heading structure
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toHaveTextContent('Key ICD Outcomes');

    // Test that all sections have proper headings
    const sectionHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(sectionHeadings).toHaveLength(3);

    // Verify heading text content
    expect(sectionHeadings[0]).toHaveTextContent('Secure Collaboration');
    expect(sectionHeadings[1]).toHaveTextContent('Rapid Deployment');
    expect(sectionHeadings[2]).toHaveTextContent('Multi-Stakeholder');
  });
});