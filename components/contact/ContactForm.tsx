// Statický formulár — odosielanie sa doplní neskôr (napr. e-mailová služba).

const field =
  "mt-2 w-full rounded-xl border border-black/10 bg-[linear-gradient(180deg,#f3f5f8,#fbfcfd)] px-4 py-3.5 text-base text-foreground shadow-[inset_0_1px_2px_rgba(13,26,46,0.06)] outline-none transition-colors placeholder:text-muted focus:border-primary focus:bg-white";
const label = "text-sm font-bold text-foreground";

export function ContactForm() {
  return (
    <form className="card h-full rounded-[22px] p-6 text-foreground sm:p-9" action="#">
      <p className="text-2xl font-extrabold">Napíšte nám</p>
      <p className="mt-1 text-muted">Odpovieme spravidla do dvoch pracovných dní.</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Meno</span>
          <input type="text" name="name" autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Telefón alebo e-mail</span>
          <input type="text" name="contact" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Týka sa</span>
          <select name="topic" className={field} defaultValue="gks">
            <option value="gks">Generátor koloidného striebra</option>
            <option value="elektrody">Náhradné elektródy</option>
            <option value="servis">Servis prístroja</option>
            <option value="zakazka">Zákazková elektronika</option>
            <option value="ine">Iné</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Správa</span>
          <textarea name="message" rows={4} className={`${field} resize-y`} />
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary mt-7 w-full rounded-lg px-6 py-4 font-bold"
      >
        Odoslať správu
      </button>
    </form>
  );
}
