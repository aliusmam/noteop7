import random
import string

tags_list = [
    "Action", "Crime", "Drama", "Fantasy", "Romance", "Comedy", "Thriller",
    "Sci-Fi", "Mystery", "Adventure", "Horror", "Family", "History", "War"
]

def generate_random_title(length=16):
    return ''.join(random.choices(string.ascii_letters + string.digits + " ", k=length)).strip()

def generate_random_tags():
    num_tags = random.randint(1, 3)  # Each title gets 1 to 3 tags
    return ", ".join(random.sample(tags_list, num_tags))

def generate_titles(num_titles=40000, filename="random_titles.txt"):
    with open(filename, "w", encoding="utf-8") as file:
        for _ in range(num_titles):
            title = generate_random_title()
            tags = generate_random_tags()
            file.write(f'{{ title: "{title} S01", tags: "{tags}" }},\n')

generate_titles()
