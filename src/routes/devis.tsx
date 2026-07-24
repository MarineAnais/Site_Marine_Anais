import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demande de Devis — Marine Anaïs" },
      { name: "description", content: "Demandez un devis sur-mesure pour votre événement." },
      { property: "og:title", content: "Demande de Devis — Marine Anaïs" },
      { property: "og:description", content: "Devis sur-mesure entreprise ou particulier." },
    ],
  }),
  component: Devis,
});

const labelStyle: React.CSSProperties = { display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--accent-cream)", fontWeight: 700 };
const inputStyle: React.CSSProperties = { padding: "1rem", borderRadius: 8, border: "1px solid rgba(212,196,168,0.3)", background: "rgba(10,25,47,0.5)", color: "white", fontFamily: "inherit", fontSize: "1rem", width: "100%", boxSizing: "border-box", outline: "none" };
const rowStyle: React.CSSProperties = { display: "flex", gap: "1.5rem", flexWrap: "wrap" };
const colStyle: React.CSSProperties = { flex: "1 1 240px", display: "flex", flexDirection: "column" };
const tabBase: React.CSSProperties = { flex: 1, padding: "1rem", borderRadius: 8, cursor: "pointer", fontWeight: 700, transition: "all 0.3s" };
const inactiveTab: React.CSSProperties = { ...tabBase, background: "transparent", border: "1px solid rgba(212,196,168,0.3)", color: "var(--text-muted)" };
const activeTab: React.CSSProperties = { ...tabBase, background: "rgba(212,196,168,0.1)", border: "1px solid var(--accent-blue)", color: "var(--accent-blue)" };

function Devis() {
  const [clientType, setClientType] = useState<"entreprise" | "particulier">("entreprise");
  const [formData, setFormData] = useState({ societe: "", siret: "", prenom: "", nom: "", email: "", telephone: "", date: "", ville: "", type_evenement: "", budget: "", description: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div style={{ padding: "3rem 2rem", minHeight: "calc(100vh - 85px)" }}>
      <Link to="/prestations-live" style={{ color: "var(--accent-blue)", fontWeight: 700, marginBottom: "2rem", display: "inline-block" }}>
        ← Retour aux prestations
      </Link>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.3rem", color: "var(--text-light)", marginBottom: "1rem" }}>Demande de Devis sur-mesure</h1>
        <p style={{ color: "var(--text-muted)" }}>Remplissez le formulaire pour que je puisse étudier votre projet.</p>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,196,168,0.2)", borderRadius: 16, padding: "2.5rem", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
        {success ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h2 style={{ color: "#4CAF50", marginBottom: "1rem" }}>Demande envoyée !</h2>
            <p style={{ color: "var(--text-muted)" }}>Votre demande a bien été transmise.</p>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
              <button onClick={() => setClientType("entreprise")} style={clientType === "entreprise" ? activeTab : inactiveTab}>Je suis une Entreprise</button>
              <button onClick={() => setClientType("particulier")} style={clientType === "particulier" ? activeTab : inactiveTab}>Je suis un Particulier</button>
            </div>
            <AnimatePresence mode="wait">
              <motion.form key={clientType} onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {clientType === "entreprise" ? (
                  <>
                    <div style={rowStyle}>
                      <div style={colStyle}><label style={labelStyle}>Nom de la société *</label><input name="societe" value={formData.societe} onChange={handleChange} style={inputStyle} required /></div>
                      <div style={colStyle}><label style={labelStyle}>Numéro de SIRET *</label><input name="siret" value={formData.siret} onChange={handleChange} style={inputStyle} required /></div>
                    </div>
                    <div style={rowStyle}>
                      <div style={colStyle}><label style={labelStyle}>Prénom *</label><input name="prenom" value={formData.prenom} onChange={handleChange} style={inputStyle} required /></div>
                      <div style={colStyle}><label style={labelStyle}>Nom *</label><input name="nom" value={formData.nom} onChange={handleChange} style={inputStyle} required /></div>
                    </div>
                  </>
                ) : (
                  <div style={rowStyle}>
                    <div style={colStyle}><label style={labelStyle}>Prénom *</label><input name="prenom" value={formData.prenom} onChange={handleChange} style={inputStyle} required /></div>
                    <div style={colStyle}><label style={labelStyle}>Nom *</label><input name="nom" value={formData.nom} onChange={handleChange} style={inputStyle} required /></div>
                  </div>
                )}
                <div style={rowStyle}>
                  <div style={colStyle}><label style={labelStyle}>Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required /></div>
                  <div style={colStyle}><label style={labelStyle}>Téléphone *</label><input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} style={inputStyle} required /></div>
                </div>
                <div style={rowStyle}>
                  <div style={colStyle}><label style={labelStyle}>Date de l'événement</label><input type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} /></div>
                  <div style={colStyle}><label style={labelStyle}>Ville *</label><input name="ville" value={formData.ville} onChange={handleChange} style={inputStyle} required /></div>
                </div>
                <div style={rowStyle}>
                  <div style={colStyle}>
                    <label style={labelStyle}>Type d'événement</label>
                    <select name="type_evenement" value={formData.type_evenement} onChange={handleChange} style={{ ...inputStyle, color: "#000" }} required>
                      <option value="" disabled>Sélectionnez</option>
                      {clientType === "entreprise" ? (
                        <>
                          <option value="seminaire">Séminaire / Congrès</option>
                          <option value="soiree">Soirée d'entreprise</option>
                          <option value="lancement">Lancement de produit</option>
                          <option value="gala">Gala</option>
                        </>
                      ) : (
                        <>
                          <option value="mariage">Mariage</option>
                          <option value="anniversaire">Anniversaire</option>
                          <option value="soiree_privee">Soirée privée</option>
                        </>
                      )}
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  {clientType === "entreprise" && (
                    <div style={colStyle}>
                      <label style={labelStyle}>Budget estimatif</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} style={{ ...inputStyle, color: "#000" }}>
                        <option value="" disabled>Sélectionnez</option>
                        <option value="<1000">Moins de 1 000 €</option>
                        <option value="1000-3000">De 1 000 à 3 000 €</option>
                        <option value=">3000">Plus de 3 000 €</option>
                      </select>
                    </div>
                  )}
                </div>
                <div style={colStyle}>
                  <label style={labelStyle}>Description du projet *</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows={5} style={{ ...inputStyle, resize: "none" }} required />
                </div>
                <button type="submit" className="ma-btn ma-btn-primary" style={{ padding: "1.1rem", fontSize: "1.05rem", width: "100%" }}>
                  Envoyer la demande de devis
                </button>
                <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  Réponse sous 48h ouvrées. Données strictement confidentielles.
                </p>
              </motion.form>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}
