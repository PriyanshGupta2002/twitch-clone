"use client";
import React, { useCallback, useState } from "react";
import qs from "query-string";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!value) {
        return;
      }

      const url = qs.stringifyUrl(
        {
          url: "/search",
          query: { term: value },
        },
        { skipEmptyString: true }
      );

      router.push(url);
    },
    [router, value]
  );

  const onClear = () => {
    setValue("");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X
          onClick={onClear}
          className="absolute right-12 h-5 w-5 text-muted-foreground cursor-pointer top-2.5 hover:opacity-75 transition"
        />
      )}
      <Button
        type="submit"
        size={"sm"}
        variant={"secondary"}
        className="rounded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
