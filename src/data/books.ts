export type BookStatus = "read" | "reading" | "next";

export type BookEntry = {
	id: string;
	title: string;
	author: string;
	yearRead?: number;
	category?: string;
	status: BookStatus;
	featured?: boolean;
	shortSignal: string;
	whatStayedWithMe?: string;
	whyItMattered?: string;
	beforeReading?: string;
	afterReading?: string;
	personalNote?: string;
};

// Editable placeholders. The static site reads data/books.json at runtime.
export const bookPlaceholders: BookEntry[] = [
	{ id: "current-placeholder", title: "Book title", author: "Author name", status: "reading", shortSignal: "Transmission in progress." },
	{ id: "next-placeholder", title: "Next signal", author: "Author name", status: "next", shortSignal: "This archive is still being decoded." },
	{ id: "archive-placeholder", title: "Archived signal", author: "Author name", status: "read", shortSignal: "More signals are being collected." }
];
