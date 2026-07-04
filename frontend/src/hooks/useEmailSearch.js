import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { useSearch } from "../context/SearchContext";

export default function useEmailSearch(endpoint) {
  const { searchQuery } = useSearch();

  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      setLoading(true);

      const response = await api.get(endpoint);

      setEmails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEmails = useMemo(() => {
    if (!searchQuery.trim()) return emails;

    const query = searchQuery.toLowerCase();

    return emails.filter((email) => {
      return (
        email.subject?.toLowerCase().includes(query) ||
        email.body?.toLowerCase().includes(query) ||
        email.sender?.toLowerCase().includes(query) ||
        email.recipient?.toLowerCase().includes(query) ||
        email.category?.toLowerCase().includes(query)
      );
    });
  }, [emails, searchQuery]);

  return {
    emails: filteredEmails,
    loading,
    refresh: fetchEmails,
  };
}