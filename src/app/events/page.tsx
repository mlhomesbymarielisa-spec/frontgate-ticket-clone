import { FESTIVAL_EVENTS } from "@/lib/events";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  // This line "arranges" them by date automatically
  const sortedEvents = [...FESTIVAL_EVENTS].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  return (
    <main className="bg-[#111212] min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-white text-2xl font-bold px-2">All Events</h1>
        
        {sortedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
