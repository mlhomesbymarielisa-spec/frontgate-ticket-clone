import { FESTIVAL_EVENTS } from "@/lib/events";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <main className="bg-[#111212] min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-white text-2xl font-bold px-2 mb-8">All Events</h1>
        
        <div className="flex flex-col gap-6">
          {FESTIVAL_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}
