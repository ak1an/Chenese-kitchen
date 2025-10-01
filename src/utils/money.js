// Simple helper: assume prices stored in USD; convert to KGS with a fixed rate or display as KGS directly
const USD_TO_KGS = 89; // adjust if needed

export function formatSom(amountUsd){
    const kgs = amountUsd * USD_TO_KGS;
    return `${Math.round(kgs).toLocaleString('ru-KG')} с`;
}


