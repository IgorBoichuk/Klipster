import { CategoryCard } from "@/shared/CategoryCard";
import { Container } from "@/shared/Container";
import { RecommendedProducts } from "@/shared/RecommendedProducts";
import { SectionTitle } from "@/shared/SectionTitle";

export default function Home() {
  return (
    <Container>
      <div>
        <SectionTitle title="Категорії" />
      </div>
      <ul className="grid grid-cols-2 gap-[20px] lg:grid-cols-3">
        <li>
          <CategoryCard />
        </li>
        <li>
          <CategoryCard />
        </li>
        <li>
          <CategoryCard />
        </li>
        <li>
          <CategoryCard />
        </li>
      </ul>
      <div>
        <SectionTitle title="Рекомендовані  товари" />
      </div>
      <ul className="grid grid-cols-3 gap-[20px]">
        <li>
          <RecommendedProducts />
        </li>
        <li>
          <RecommendedProducts />
        </li>
        <li>
          <RecommendedProducts />
        </li>
        <li>
          <RecommendedProducts />
        </li>
        <li>
          <RecommendedProducts />
        </li>
        <li>
          <RecommendedProducts />
        </li>
      </ul>
    </Container>
  );
}
