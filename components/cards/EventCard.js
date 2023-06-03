export default function EventCard() {
  return (
    <div className="w-80 flex flex-col justify-start bg-white">
      <div className="h-64 bg-slate-400"></div>
      <div className="w-full p-2 text-start gap-2">
        <h4 className="w-full">Event Name</h4>
        <p className="italic">Additional tags</p>
        <p>
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </p>
      </div>
    </div>
  );
}
