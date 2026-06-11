import { useState } from "react";
import { employeeApi } from "../service/employee";
import { formatEnum } from "../helpers/helper";
import { Professions } from "../types/type";
import type { Employee } from "../types/type";

interface Props {
  onCreated?: (employee: Employee) => void;
}

const CreateEmployee = ({ onCreated }: Props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [professions, setProfessions] = useState<Professions[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const toggleProfession = (profession: Professions) => {
    setProfessions((current) =>
      current.includes(profession)
        ? current.filter((p) => p !== profession)
        : [...current, profession]
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const created = await employeeApi.create({
        name,
        phoneNumber,
        professions,
        bookings: [],
      });

      setName("");
      setPhoneNumber("");
      setProfessions([]);
      onCreated?.(created);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create employee");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Phone number
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <span>Professions</span>
        {Object.values(Professions).map((profession) => (
          <label key={profession}>
            <input
              type="checkbox"
              checked={professions.includes(profession)}
              onChange={() => toggleProfession(profession)}
            />
            {formatEnum(profession)}
          </label>
        ))}
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button type="submit" disabled={saving}>
        {saving ? "Saving..." : "Create Employee"}
      </button>
    </form>
  );
};

export default CreateEmployee;
