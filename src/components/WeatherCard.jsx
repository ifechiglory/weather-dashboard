export default function WeatherCard({ name, temp, desc, icon }) {
  // fixed typo: .org not .orf
  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : "";

  return (
    <section className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
      {iconUrl && <img src={iconUrl} alt={desc} className="w-16 h-16" />}
      <section>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-3xl font-bold">{Math.round(temp)}°C</p>
        <p className="text-gray-500 capitalize">{desc}</p>
      </section>
    </section>
  );
}
