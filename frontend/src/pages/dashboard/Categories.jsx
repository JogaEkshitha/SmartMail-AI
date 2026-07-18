import DashboardLayout from "../../components/dashboard/DashboardLayout";
import CategoryCard from "../../components/dashboard/CategoryCard";
import useEmailSearch from "../../hooks/useEmailSearch";

const categoryOrder = [
  "Work",
  "Finance",
  "Personal",
  "Promotion",
  "General",
];

function Categories() {
  const { emails, loading } = useEmailSearch("emails/categories/");

  const groupedEmails = categoryOrder.reduce((acc, category) => {
    acc[category] = emails.filter(
      (email) => email.category === category
    );
    return acc;
  }, {});

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-slate-400">
          Loading categories...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Categories
        </h1>

        <p className="mt-2 text-slate-400">
          AI automatically organizes your emails into smart categories.
        </p>
      </div>

      {categoryOrder.map((category) => {
        const categoryEmails = groupedEmails[category];

        if (categoryEmails.length === 0) return null;

        return (
          <div
            key={category}
            className="mb-12"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {category}
              </h2>

              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                {categoryEmails.length} Emails
              </span>
            </div>

            <div className="space-y-6">
              {categoryEmails.map((email) => (
                <CategoryCard
                  key={email.id}
                  email={email}
                />
              ))}
            </div>
          </div>
        );
      })}
    </DashboardLayout>
  );
}

export default Categories;