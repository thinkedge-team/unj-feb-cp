import type { Partner } from "@/types/content";

const items = [
  ["bank-indonesia", "Bank Indonesia", "Regulator", "Indonesia"], ["ojk", "Otoritas Jasa Keuangan", "Regulator", "Indonesia"], ["bank-mandiri", "Bank Mandiri", "Perbankan", "Indonesia"], ["bank-rakyat-indonesia", "Bank Rakyat Indonesia", "Perbankan", "Indonesia"], ["bank-negara-indonesia", "Bank Negara Indonesia", "Perbankan", "Indonesia"], ["pwc-indonesia", "PwC Indonesia", "Konsultansi dan Audit", "Indonesia"], ["ey-indonesia", "EY Indonesia", "Konsultansi dan Audit", "Indonesia"], ["deloitte-indonesia", "Deloitte Indonesia", "Konsultansi dan Audit", "Indonesia"], ["kpmg-indonesia", "KPMG Indonesia", "Konsultansi dan Audit", "Indonesia"], ["university-of-melbourne", "University of Melbourne", "Universitas", "Australia"], ["waseda-university", "Waseda University", "Universitas", "Jepang"], ["universiti-malaysia-terengganu", "Universiti Malaysia Terengganu", "Universitas", "Malaysia"],
] as const;

export const partners: readonly Partner[] = items.map(([slug, name, category, country]) => ({ slug, name, category, country, summary: `Kemitraan ${name} memperluas pembelajaran, riset, dan kesiapan karier sivitas FEB UNJ.`, website: `https://www.${slug}.org` }));
