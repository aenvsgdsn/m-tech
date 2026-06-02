// WhatsApp number for all forms
export const WA_NUMBER = '923362222480';

/**
 * Send form data to WhatsApp
 * @param {string} formName - Identifies which form sent the message
 * @param {Object} fields - Key-value pairs of form data
 */
export function sendToWhatsApp(formName, fields) {
  const header = `*📋 ${formName}*\n━━━━━━━━━━━━━━━━━`;
  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `*${k}:* ${v}`)
    .join('\n');
  const footer = `\n━━━━━━━━━━━━━━━━━\n_Sent from M-Tech Website_`;
  const message = encodeURIComponent(`${header}\n${body}${footer}`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank');
}
