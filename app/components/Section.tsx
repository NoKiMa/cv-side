'use client';

interface Props {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: Props) {
  return (
    <section id={id} className={className}>
      <h2 className="text-2xl font-bold mb-6 text-[#8B4513]">{title}</h2>
      {children}
    </section>
  );
}