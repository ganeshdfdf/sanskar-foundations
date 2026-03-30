import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface QuoteFormDialogProps {
  children: React.ReactNode;
}

const QuoteFormDialog = ({ children }: QuoteFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", location: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in Name and Phone number.");
      return;
    }
    toast.success("Thank you! We will contact you soon. धन्यवाद!");
    setForm({ name: "", phone: "", location: "", message: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">Get Free Quote / फ्री कोटेशन मिळवा</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input
            placeholder="Your Name / तुमचे नाव"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
          />
          <Input
            placeholder="Phone Number / फोन नंबर"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            maxLength={15}
          />
          <Input
            placeholder="Location / ठिकाण"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            maxLength={200}
          />
          <Textarea
            placeholder="Message / संदेश"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={3}
          />
          <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
            Submit / पाठवा
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormDialog;
