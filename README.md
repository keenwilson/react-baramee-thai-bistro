# react-baramee-thai-bistro

## How to edit/update `react-baramee-thai-bistro` and deploy to `https://www.barameethaibistro.com/`

1. Make changes in `react-baramee-thai-bistro`
2. Commit to Github repository for versioning reference at[react-baramee-thai-bistro](https://github.com/keenwilson/react-baramee-thai-bistro)

   ```shell
   git push
   ```

3. Run `yarn build`
4. Copy what's in the `build/` folder of `react-baramee-thai-bistro`
5. Switch to `barameethaibistro/barameethaibistro.github.io` folder, empty the repository, and commit to barameethaibistro/ github.
6. Paste the files copied from `react-baramee-thai-bistro/build/`
7. Create `CNAME` file with one line of content
   `www.barameethaibistro.com`
8. Push to `barameethaibistro/barameethaibistro.github.io`
9. The `https://www.barameethaibistro.com/` should be updated immediately.
