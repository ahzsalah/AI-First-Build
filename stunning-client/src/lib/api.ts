const API_BASE_URL = "http://localhost:3001";

export interface WebsiteIdea {
  _id: string;
  idea: string;
  sections: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GenerateSectionsRequest {
  idea: string;
  sections?: string[];
}

export interface GenerateSectionsResponse {
  _id: string;
  idea: string;
  sections: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

/**
 * Generate sections for a website idea
 * @param idea - The website idea description
 * @returns Promise<GenerateSectionsResponse>
 */
export async function generateSections(
  idea: string
): Promise<GenerateSectionsResponse> {
  const response = await fetch(`${API_BASE_URL}/sections/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea }),
  });

  if (!response.ok) {
    throw new Error(`Failed to generate sections: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get all website ideas with their sections
 * @returns Promise<WebsiteIdea[]>
 */
export async function getSections(): Promise<WebsiteIdea[]> {
  const response = await fetch(`${API_BASE_URL}/sections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch sections: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Create a website idea with custom sections
 * @param idea - The website idea description
 * @param sections - Optional array of custom sections
 * @returns Promise<GenerateSectionsResponse>
 */
export async function createWebsiteIdea(
  idea: string,
  sections?: string[]
): Promise<GenerateSectionsResponse> {
  const response = await fetch(`${API_BASE_URL}/sections/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea, sections }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create website idea: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get a specific website idea by ID
 * @param id - The website idea ID
 * @returns Promise<WebsiteIdea | null>
 */
export async function getWebsiteIdeaById(
  id: string
): Promise<WebsiteIdea | null> {
  const response = await fetch(`${API_BASE_URL}/sections/website-ideas/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch website idea: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Update a website idea
 * @param id - The website idea ID
 * @param idea - The updated website idea description
 * @param sections - Optional array of updated sections
 * @returns Promise<WebsiteIdea | null>
 */
export async function updateWebsiteIdea(
  id: string,
  idea: string,
  sections?: string[]
): Promise<WebsiteIdea | null> {
  const response = await fetch(`${API_BASE_URL}/sections/website-ideas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea, sections }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update website idea: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Delete a website idea
 * @param id - The website idea ID
 * @returns Promise<WebsiteIdea | null>
 */
export async function deleteWebsiteIdea(
  id: string
): Promise<WebsiteIdea | null> {
  const response = await fetch(`${API_BASE_URL}/sections/website-ideas/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete website idea: ${response.statusText}`);
  }

  return response.json();
}
