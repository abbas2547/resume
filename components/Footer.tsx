export default function Footer() {
  return (
    <footer className="w-full py-8 px-8 border-t border-white/[.04]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div>© 2026 Abbas. All rights reserved.</div>
        <div className="flex gap-4 text-[var(--text-secondary)]">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
