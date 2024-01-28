#!/bin/bash
# Function to print error
print_error() {
  echo -e "\033[0;31mError: $1\033[0m"
}

# Check if at least one argument is provided
if [ $# -eq 0 ]; then
    print_error "No projects provided. Please provide a comma-separated list of projects to build."
    exit 1
fi

# Loop through the provided modules and run nx build for each
IFS=',' read -ra modules <<< "$1"
for module in "${modules[@]}"; do
  echo "---------------------------------------------------------------"
  echo "Checking if $module is a valid project..."
  if [ ! -d "apps/$module" ]; then
    print_error "$module is not a valid project."
    exit 1
  fi
  echo "$module is a valid project."
    echo "Building $module..."
    nx build "$module"
done

# now copy all build files for all project except the shell project to the shell project folder

for module in "${modules[@]}"; do
  if [ "$module" != "shell" ]; then
    echo "Copying build files for $module to shell project..."
    mkdir -p dist/apps/shell/$module
    cp -r dist/apps/$module/* dist/apps/shell/$module
    rm -r dist/apps/$module
  fi
done

echo "Copying shell project files to iss..."
#mkdir -p ../iss/wwwroot
#cp -r dist/apps/shell/* ../iss/wwwroot

echo "serve the dist folder with http-server..."
npx http-server dist/apps/shell -p 8080 -o

echo "Build process completed for all specified modules."


