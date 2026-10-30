// Keywords marcadas nos dados com **termo** viram negrito e esclarecimentos *(...)* viram itálico
export const richText = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Condição **SE** no início do texto ganha destaque próprio
    .replace(/^\s*\*\*SE\*\*/, '<strong class="card-if">SE</strong>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // O ponto final depois do esclarecimento fica no fim da frase, não sozinho na linha de baixo
    .replace(/\s*(<em>.+?<\/em>)\./g, ".$1");
