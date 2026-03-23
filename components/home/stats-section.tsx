export default function StatsSection() {
  const stats = [
   { num: '10+', label: 'مشاريع أولية', labelEn: 'Initial Projects' },
{ num: '5+', label: 'عملاء حاليين', labelEn: 'Active Clients' },
{ num: '100%', label: 'رضا العملاء', labelEn: 'Client Satisfaction' },
{ num: '24/7', label: 'دعم مستمر', labelEn: 'Ongoing Support' },
  ]

  return (
    <section className="py-16 bg-white border-y border-border" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center animate-on-scroll`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="text-4xl lg:text-5xl font-bold mb-2 brand-gradient-text stat-number"
              >
                {s.num}
              </div>
              <div className="font-semibold text-foreground text-sm sm:text-base">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.labelEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
